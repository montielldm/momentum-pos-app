import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

interface ItemLink {
    title: string
    url: string
}

const tabs_setting: ItemLink[] = [
    {
        title: "General",
        url: "/app/settings"
    },
    {
        title: "Headquarters",
        url: "/app/settings/headquarters"
    },
    {
        title: "Tables",
        url: "/app/settings/tables"
    }
]

export default function TabListSettings() {
    const pathname = useLocation()

    return (
        <div className="border-y border-dashed mt-2 py-2 flex items-center gap-2">
            {
                tabs_setting.map((item) => (
                    <Link to={item.url} key={item.url} className={cn("text-sm px-3 font-medium text-muted-foreground py-0.5 rounded-full", {
                        "bg-accent text-primary": item.url === pathname.pathname
                    })} viewTransition>
                        {item.title}
                    </Link>
                ))
            }
        </div>
    )
}
