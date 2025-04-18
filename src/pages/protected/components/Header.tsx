import BreadcrumbsContainer from "./BreadcrumbsContainer"
import { menu } from "../config/menu.data"
import { useLocation } from "react-router-dom"

interface Props {
  title: string
  description: string
}

export default function Header({ title, description }:Props) {
  const pathname = useLocation()
  const path = menu.filter((item) => pathname.pathname.includes(item.url))

  return (
    <div className="flex flex-col gap-2">
      <BreadcrumbsContainer 
        menu={path}
      />
      <div className='space-y-0'>
          <h1 className='scroll-m-20 text-2xl font-bold tracking-tight'>{title}</h1>
          <p className='text-sm text-muted-foreground'>{description}</p>
      </div>
    </div>
  )
}
