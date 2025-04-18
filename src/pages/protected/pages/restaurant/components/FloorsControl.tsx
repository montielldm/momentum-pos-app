import { Panel } from "@xyflow/react"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { useState } from "react"

export default function FloorsControl() {
    const [value, setValue] = useState<string>("left")
    return (
        <Panel position="bottom-center">
            <ToggleGroup
                type="single"
                variant="outline"
                value={value}
                onValueChange={(value) => {
                    if (value) setValue(value)
                }}
            >
                <ToggleGroupItem className="flex-1 bg-white px-4" value="left">
                    Main Floor
                </ToggleGroupItem>
                <ToggleGroupItem className="flex-1 bg-white px-4" value="center">
                    Center
                </ToggleGroupItem>
                <ToggleGroupItem className="flex-1 bg-white px-4" value="right">
                    Right
                </ToggleGroupItem>
            </ToggleGroup>
        </Panel>
    )
}
