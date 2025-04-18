import { Button } from '@/components/ui/button'
import { Panel } from '@xyflow/react'
import { Minus, SquareMousePointer } from 'lucide-react'
import { IconPicnicTable } from '@tabler/icons-react'

export default function ToolsControls() {
    return (
        <Panel position="top-right">
            <div className="flex flex-col items-start gap-2">
                <div className="inline-flex flex-col -space-y-px rounded-md shadow-xs rtl:space-y-reverse">
                    <Button
                        className="rounded-none shadow-none first:rounded-t-md last:rounded-b-md focus-visible:z-10"
                        variant="outline"
                        size="icon_xs"
                        aria-label="Flip Horizontal"
                    >
                        <SquareMousePointer size={14} aria-hidden="true" />
                    </Button>
                    <Button
                        className="rounded-none shadow-none first:rounded-t-md last:rounded-b-md focus-visible:z-10"
                        variant="outline"
                        size="icon_xs"
                        aria-label="Flip Vertical"
                    >
                        <IconPicnicTable size={16} aria-hidden="true" />
                    </Button>
                </div>
            </div>
        </Panel>
    )
}
