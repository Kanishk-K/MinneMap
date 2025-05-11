"use client"
import Link from "next/link";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Bell, Home, Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";

export default function AppSidebar() {
  const {systemTheme, theme, setTheme} = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <Sidebar variant={"sidebar"} collapsible={"icon"}>
        <SidebarHeader className="mt-1.5">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <button onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")} className="cursor-pointer">
                            <Sun className="h-4 w-4 block dark:hidden" />
                            <Moon className="h-4 w-4 hidden dark:block" />
                            <span className="ml-2">Toggle Light/Dark Mode</span>
                        </button>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <Link href="/dashboard">
                            <Home className="h-4 w-4" />
                            <span className="ml-2">Overview</span>
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
                                <div className="absolute -top-0.5 right-0 w-2 h-2 bg-red-800 dark:bg-red-400 rounded-full"></div>
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