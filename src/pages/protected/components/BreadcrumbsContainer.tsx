import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { House } from "lucide-react"
import { MenuItem } from "../config/menu.data"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

interface Props {
  menu: MenuItem[]
}


export default function BreadcrumbsContainer({ menu }: Props) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {
          menu.map((item, idx) => (
            <>
              {
                idx !== menu.length - 1 ? (
                  <BreadcrumbItem key={item.url}>
                    <BreadcrumbLink asChild>
                      <Link to={item.url}>
                        {
                          item.url === "/app" ? (
                            <House size={16} aria-hidden="true" />
                          ) : ""
                        }
                        <span className={cn("", {
                          "sr-only": item.url === "/app"
                        })}>{item.title}</span>
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                ) : (
                  <BreadcrumbPage>
                    {
                      item.url === "/app" ? (
                        <House size={16} aria-hidden="true" />
                      ) : ""
                    }
                    <span className={cn("", {
                      "sr-only": item.url === "/app"
                    })}>{item.title}</span>
                  </BreadcrumbPage>
                )
              }
              {
                idx !== menu.length - 1 ? (
                  <BreadcrumbSeparator> / </BreadcrumbSeparator>
                ) : ""
              }
            </>
          ))
        }
      </BreadcrumbList>
    </Breadcrumb>
  )
}
