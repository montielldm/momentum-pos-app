import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CheckIcon, ChevronDownIcon, PlusIcon } from "lucide-react";
import { useId, useState } from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const organizations = [
    {
        value: "originui",
        label: "Origin UI",
    },
    {
        value: "cruip",
        label: "Cruip",
    },
];

export default function SiteMenu() {
    const id = useId();
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>("originui");

    return (
        <div className=":not-first:mt-2">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        id={id}
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        size="sm"
                        className="bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
                    >
                        <span className={cn("truncate", !value && "text-muted-foreground")}>
                            {value
                                ? (
                                    <div className="flex items-center gap-2">
                                        <Avatar className="size-4 rounded">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        {organizations.find((organization) => organization.value === value)?.label}
                                    </div>
                                )
                                : "Select organization"}
                        </span>
                        <ChevronDownIcon
                            size={16}
                            className="text-muted-foreground/80 shrink-0"
                            aria-hidden="true"
                        />
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0"
                    align="start"
                >
                    <Command>
                        <CommandInput placeholder="Find organization" />
                        <CommandList>
                            <CommandEmpty>No organization found.</CommandEmpty>
                            <CommandGroup>
                                {organizations.map((organization) => (
                                    <CommandItem
                                        key={organization.value}
                                        value={organization.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue);
                                            setOpen(false);
                                        }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            {organization.label}
                                        </div>
                                        {value === organization.value && <CheckIcon size={16} className="ml-auto" />}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            <CommandSeparator />
                            <CommandGroup>
                                <Button variant="ghost" className="w-full justify-start font-normal">
                                    <PlusIcon size={16} className="-ms-2 opacity-60" aria-hidden="true" />
                                    New organization
                                </Button>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}
