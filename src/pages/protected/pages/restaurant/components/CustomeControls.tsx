import { Panel, useReactFlow, useViewport } from "@xyflow/react"
import { Button } from "@/components/ui/button"
import { LockKeyhole, LockKeyholeOpen, Minus, Plus, Scan } from "lucide-react"
import { useCallback } from "react"

interface Props {
    isLock: boolean,
    setIsLock: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CustomeControls({ isLock, setIsLock }: Props) {
    const { zoomIn, zoomOut, fitView } = useReactFlow()
    const { zoom } = useViewport()

    return (
        <Panel position="bottom-left">
            <div className="flex flex-col items-start gap-2">
                <div className="inline-flex flex-col -space-y-px rounded-md shadow-xs rtl:space-y-reverse">
                    <Button
                        className="rounded-none shadow-none first:rounded-t-md last:rounded-b-md focus-visible:z-10"
                        variant="outline"
                        size="icon_xs"
                        disabled={zoom === 2}
                        aria-label="Flip Horizontal"
                        onClick={() => zoomIn({ duration: 800 })}
                    >
                        <Plus size={14} aria-hidden="true" />
                    </Button>
                    <Button
                        className="rounded-none shadow-none first:rounded-t-md last:rounded-b-md focus-visible:z-10"
                        variant="outline"
                        size="icon_xs"
                        disabled={zoom === 0.5}
                        aria-label="Flip Vertical"
                        onClick={() => zoomOut({ duration: 800 })}
                    >
                        <Minus size={14} aria-hidden="true" />
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <Button size="icon_xs" variant="outline" onClick={() => fitView({ duration: 600 })}>
                        <Scan size={14} aria-hidden="true" />
                    </Button>
                    <Button size="icon_xs" variant="outline" onClick={() => {
                        setIsLock(!isLock)
                    }}>
                        {isLock ? (
                            <LockKeyhole size={14} aria-hidden="true" />
                        ) : (
                            <LockKeyholeOpen size={14} aria-hidden="true" />
                        )
                        }
                    </Button>
                </div>
            </div>
        </Panel>
    )
}
