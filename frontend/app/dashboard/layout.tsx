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
      <main className="w-full">
        <div className="flex items-center backdrop-blur-lg sticky top-0 py-4">
          <div className="flex items-center px-4">
            <SidebarTrigger className="cursor-pointer"/>
          </div>
        </div>
        <div className="w-full p-4">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}