"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "./TableBase"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]

export default function CampaignTable({ data }: { data: Payment[] }) {
    return (
        <DataTable columns={columns} data={data} className="col-span-2 sm:col-span-4 lg:col-span-4 md:col-span-6" />
    )
}