"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/Charts/Tables/Campaign/CampaignTable"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut } from "@/components/ui/dropdown-menu"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Eye, Map, MoreHorizontal, Trash2, UserRoundPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Campaign = {
  id: string
  date: string
  name: string
  views: number
}

export const columns: ColumnDef<Campaign>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"))
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    }
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const name:string = row.getValue("name")
      return name.length > 30 ? `${name.slice(0, 30)} ...` : name
    }
  },
  {
    accessorKey: "views",
    header: "Views",
    cell: ({ row }) => {
      const views:number = row.getValue("views")
      return views.toLocaleString("en-US")
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const campaign = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Campaign Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              View campaign
              <DropdownMenuShortcut><Eye /></DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Share campaign
              <DropdownMenuShortcut><UserRoundPlus /></DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Campaign Map
              <DropdownMenuShortcut><Map /></DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => {console.log("Delete campaign", campaign.id)}}>
              Delete Campaign
              <DropdownMenuShortcut><Trash2 className="dark:stroke-red-400 stroke-red-600"/></DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]

export default function CampaignTable({ data }: { data: Campaign[] }) {
    return (
        <DataTable columns={columns} data={data} className="col-span-2 sm:col-span-4 md:col-span-4 lg:col-span-4 row-span-2" />
    )
}