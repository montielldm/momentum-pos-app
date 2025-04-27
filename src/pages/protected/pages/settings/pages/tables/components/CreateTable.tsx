import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, SquarePlus } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useTableMutation from "../hooks/useTableMutation";

const formSchema = z.object({
  seats: z.number({ required_error: "Please select a number to display" }),
});

export default function CreateTable() {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate, isLoading } = useTableMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      seats: 2,
    },
    mode: "onChange",
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    mutate(data);
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="success" onClick={() => setIsOpen(!isOpen)} size="sm">
          <Plus size={14} />
          Add Table
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Table</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <FormField
                control={form.control}
                name="seats"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seats</FormLabel>
                    <Select
                      onValueChange={(event) => {
                        field.onChange(Number(event));
                      }}
                      defaultValue={String(field.value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select framework" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 Seats</SelectItem>
                        <SelectItem value="4">4 Seats</SelectItem>
                        <SelectItem value="6">6 Seats</SelectItem>
                        <SelectItem value="8">8 Seats</SelectItem>
                        <SelectItem value="10">10 Seats</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary" size="sm">
                    Close
                  </Button>
                </DialogClose>
                <Button
                  disabled={isLoading}
                  type="submit"
                  variant="success"
                  size="sm"
                >
                  {isLoading ? "Creating table..." : "Create Table"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
