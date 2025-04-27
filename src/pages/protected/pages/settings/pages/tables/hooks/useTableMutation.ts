import { useMutation } from "@tanstack/react-query";
import { CreateTableService } from "../services/table.services";
import CustomeToast from "@/components/custom-toast/CustomToast";
import { queryClient } from "@/App";

export default function useTableMutation() {
  const mutation = useMutation({
    mutationFn: CreateTableService,
    onMutate: () => {
      CustomeToast({
        title: "Creating a table...",
        description: "We are working on creating the table",
        type: "loading",
      });
    },
    onSuccess() {
      CustomeToast({
        title: "Table successfully created",
        description: "The table was successfully created",
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["tables"],
      });
    },
    onError: () => {
      CustomeToast({
        title: "An error has occurred.",
        description: "We have had a problem with the table registration",
        type: "error",
      });
    },
  });

  return mutation;
}
