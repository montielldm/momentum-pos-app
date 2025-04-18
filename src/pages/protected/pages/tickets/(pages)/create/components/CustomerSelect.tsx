import { useId } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CustomerSelect() {
  const id = useId()
  return (
    <Select defaultValue="1">
        <SelectTrigger
          id={id}
          className="w-full ps-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_img]:shrink-0"
        >
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2">
          <SelectGroup>
            <SelectLabel className="ps-2">Impersonate user</SelectLabel>
            <SelectItem value="1">
              <img
                className="size-5 rounded"
                src="https://avatars2.githubusercontent.com/u/123432"
                alt="Frank Allison"
                width={20}
                height={20}
              />
              <span className="truncate">Jenny Hamilton</span>
            </SelectItem>
            <SelectItem value="2">
              <img
                className="size-5 rounded"
                src="https://avatars2.githubusercontent.com/u/12321"
                alt="Xavier Guerra"
                width={20}
                height={20}
              />
              <span className="truncate">Paul Smith</span>
            </SelectItem>
            <SelectItem value="3">
              <img
                className="size-5 rounded"
                src="https://avatars2.githubusercontent.com/u/123232"
                alt="Anne Kelley"
                width={20}
                height={20}
              />
              <span className="truncate">Luna Wyen</span>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
  )
}