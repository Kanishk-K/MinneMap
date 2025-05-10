import AppSidebar from "@/components/Layout/SideBar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import React from "react"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <main className="p-4">
        <SidebarTrigger className="cursor-pointer"/>
        {children}
      </main>
    </SidebarProvider>
  )
}