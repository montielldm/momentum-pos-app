import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    BookOpenIcon,
    LogOutIcon,
    UserPenIcon,
} from "lucide-react";
import { useAuth } from "@/context/auth.context";

export default function UserMenu() {
    const { getUser, signout } = useAuth()
    const user = getUser()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="cursor-pointer h-[28px] p-0 hover:bg-transparent focus-visible:outline-none focus-visible:ring-0">
                    <Avatar className="border">
                        <AvatarImage src={user?.avatar} alt="Profile image" />
                        <AvatarFallback>KK</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="max-w-64">
                <DropdownMenuLabel className="flex min-w-0 flex-col">
                    <span className="text-foreground truncate text-sm font-semibold capitalize">{user?.name} {user?.lastname}</span>
                    <span className="text-muted-foreground truncate text-xs font-normal">
                        {user?.email}
                    </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <BookOpenIcon size={16} className="opacity-60" aria-hidden="true" />
                        <span>Centro de ayudas</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <UserPenIcon size={16} className="opacity-60" aria-hidden="true" />
                        <span>Perfil</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signout()}>
                    <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
                    <span>Cerrar sesión</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}