import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical } from 'lucide-react'
import ExcelLogo from "@/assets/excel.svg"
import PDFLogo from "@/assets/pdf.svg"

export default function ExportFiles() {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon_xs">
                        <EllipsisVertical size={14} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="min-w-44">
                    <DropdownMenuItem disabled>
                        <img className="w-4 h-4" src={ExcelLogo} alt="excel logo" />
                        <span>Download Excel</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>
                        <img className="w-4 h-4" src={PDFLogo} alt="excel logo" />
                        <span>Download PDF</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
