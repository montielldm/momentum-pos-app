import { Button } from "@/components/ui/button";
import { Cross, FolderClosed, X } from "lucide-react";

export default function AddOrderTable() {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-end">
        <Button variant="outline" size="icon_xs">
          <X size={14} />
        </Button>
      </div>
      <input className="w-full" placeholder="Search product..." />
      <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-3">
        <div className="p-2 border"></div>
        <div className="p-2 border"></div>
        <div className="p-2 border"></div>
        <div className="p-2 border"></div>
        <div className="p-2 border"></div>
        <div className="p-2 border"></div>
      </div>
    </div>
  );
}
