import Link from "next/link";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Bell, Home, User } from "lucide-react";

export default function AppSidebar() {
  return (
    <Sidebar variant={"sidebar"} collapsible={"icon"}>
        <SidebarHeader className="mt-1.5">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <Link href="/dashboard">
                            <Home className="h-4 w-4" />
                            <span className="ml-2">Profile</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup />
            <SidebarGroup />
        </SidebarContent>
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <Link href="/dashboard/notifications">
                            <div className="relative">
                                <Bell className="h-4 w-4" />
                                <div className="absolute -top-0.5 right-0 w-2 h-2 bg-primary rounded-full"></div>
                            </div>
                            <span className="ml-2">Notifications</span>
                        </Link>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>3</SidebarMenuBadge>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <Link href="/dashboard/profile">
                            <User className="h-4 w-4" />
                            <span className="ml-2">Profile</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}