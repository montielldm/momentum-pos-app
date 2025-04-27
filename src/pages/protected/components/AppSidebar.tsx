import {
  Settings,
  Ticket,
  House,
  CircleUserRound,
  Building2,
  HandPlatter,
  SwatchBook,
  ConciergeBell,
} from "lucide-react";
import Logo from "@/assets/momentum-logo.svg";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { useLocation } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";

export function AppSidebar() {
  const { pathname } = useLocation();
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-white">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="flex items-center gap-2 px-2 pt-2 pb-[4px]">
                <Avatar className="rounded-md">
                  <AvatarImage src={Logo} alt="Kelly King" />
                  <AvatarFallback>KK</AvatarFallback>
                </Avatar>
                <span
                  className={`font-bold text-md whitespace-nowrap ${state !== "expanded" ? "hidden" : ""}`}
                >
                  Momentum POS
                </span>
              </SidebarMenuItem>
              <Separator orientation="horizontal" />
              <div className="flex flex-col gap-1 px-1.5 py-1">
                <SidebarMenuItem>
                  <SidebarMenuButton
                    variant={"outline"}
                    tooltip="Home"
                    asChild
                    isActive={"/app" === pathname}
                  >
                    <Link to="/app" viewTransition>
                      <House />
                      <span className="font-medium">Home</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </div>
              <Separator orientation="horizontal" />
              {state !== "collapsed" && (
                <li className=" px-2 flex items-center gap-2">
                  <div className="w-full">
                    <span className="uppercase text-[11px] font-medium text-muted-foreground italic">
                      sales
                    </span>
                  </div>
                </li>
              )}
              <div className="flex flex-col gap-1 px-1.5 py-1">
                <SidebarMenuItem>
                  <SidebarMenuButton
                    variant={"outline"}
                    tooltip="Tickets"
                    asChild
                    isActive={pathname.includes("/app/tickets")}
                  >
                    <Link to="/app/tickets" viewTransition>
                      <Ticket />
                      <span className="font-medium">Tickets</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    variant={"outline"}
                    tooltip="Restaurant"
                    asChild
                    isActive={pathname.includes("/app/restaurant")}
                  >
                    <Link to="/app/restaurant" viewTransition>
                      <ConciergeBell />
                      <span className="font-medium">Restaurant</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </div>
              <Separator orientation="horizontal" />
              {state !== "collapsed" && (
                <li className=" px-2 flex items-center gap-2">
                  <div className="w-full">
                    <span className="uppercase text-[11px] font-medium text-muted-foreground italic">
                      CORES
                    </span>
                  </div>
                </li>
              )}
              <div className="flex flex-col gap-1 px-1.5 py-1">
                <SidebarMenuItem>
                  <SidebarMenuButton
                    variant={"outline"}
                    tooltip="Products"
                    asChild
                    isActive={pathname.includes("/app/products")}
                  >
                    <Link to="/app/products" viewTransition>
                      <SwatchBook />
                      <span className="font-medium">Products</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    variant={"outline"}
                    tooltip="Customers"
                    asChild
                    isActive={pathname.includes("/app/customers")}
                  >
                    <Link to="/app/customers" viewTransition>
                      <CircleUserRound />
                      <span className="font-medium">Customers</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    variant={"outline"}
                    tooltip="Providers"
                    asChild
                    isActive={pathname.includes("/app/providers")}
                  >
                    <Link to="/app/providers" viewTransition>
                      <Building2 />
                      <span className="font-medium">Providers</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip={"Settings"} asChild>
              <Link to={"/app/settings"} viewTransition>
                <Settings />
                <span className="font-medium">Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
