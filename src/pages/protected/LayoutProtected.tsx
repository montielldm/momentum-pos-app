import { Outlet } from "react-router-dom";
import { useAuth } from "@/context/auth.context";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
import UserMenu from "./components/UserMenu";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Inbox } from "lucide-react";

export default function LayoutProtected() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen">
        <div className="py-2 pl-2 pr-4 border-b flex items-center justify-between bg-white">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            {/* <SiteMenu /> */}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon_xs">
                <Inbox size={14} />
              </Button>
            </div>
            <UserMenu />
          </div>
        </div>
        <div className="bg-white h-screen-main">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
