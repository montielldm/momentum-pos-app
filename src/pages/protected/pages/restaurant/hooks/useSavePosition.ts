import { useMutation } from "@tanstack/react-query";
import { SavePositionService } from "../services/restaurant.services";
import CustomeToast from "@/components/custom-toast/CustomToast";
import { queryClient } from "@/App";

export default function useSavePosition() {
  const mutation = useMutation({
    mutationFn: SavePositionService,
    onMutate: () => {
      CustomeToast({
        title: "Save positions...",
        description: "We are working on saving the position of the table",
        type: "loading",
      });
    },
    onSuccess() {
      CustomeToast({
        title: "Position successfully saved",
        description: "The table was successfully saved",
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["tables"],
      });
    },
    onError: () => {
      CustomeToast({
        title: "An error has occurred.",
        description: "We have had a problem with save position",
        type: "error",
      });
    },
  });

  return mutation;
}
