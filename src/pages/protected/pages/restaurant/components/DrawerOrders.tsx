import { Input } from "@/components/ui/input";
import { AppNode } from "../stores/flow.store";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRightIcon, SearchIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import AddOrderTable from "./AddOrderTable";

interface Props {
  node: AppNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DrawerOrders({ node, isOpen, setIsOpen }: Props) {
  return (
    <div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: 100, y: 0 }}
              animate={{ x: 0, y: 0 }}
              exit={{ x: 100, opacity: 0, y: 0 }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.3 }}
              className="w-11/12 max-w-6xl fixed top-4 right-4 bg-white rounded-lg p-2 z-50 max-h-[90vh] overflow-auto"
            >
              <AddOrderTable />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
