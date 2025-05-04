"use client";

import TableCustom from "@/components/custom-table/table-custom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Resident } from "@/model/Resident";
import { RESIDENTS_URL } from "@/services/base";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { FC, useState } from "react";
import AddResidentDialog from "./add-resident-dialog";

const ResidentPage: FC = () => {
    const [isAddResidentDialogOpen, setIsAddResidentDialogOpen] = useState(false);
    const columns: ColumnDef<Resident>[] = [
        {
            accessorKey: "name",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                        Name
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ row }) => (
                <div>{row.getValue("name")}</div>
            ),
        },
        {
            accessorKey: "identityNumber",
            header: "Identity Number",
            cell: ({ row }) => <div >{row.getValue("identityNumber")}</div>,
        },
        {
            accessorKey: "verified",
            header: "Verified",
            cell: ({ row }) => <div>{row.getValue("verified") == 1 ? "Yes" : "No"}</div>,
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const payment = row.original

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(payment.id.toString())}
                            >
                                Copy payment ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>View payment details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ];
    return <div className="flex flex-col ">
        <div className="flex flex-col">
            <span className="text-4xl font-bold">Residents</span>
            <span className="text-lg text-gray-500">Manage your residents</span>
        </div>
        <hr className="mt-2.5 mb-3" />
        <TableCustom columns={columns} url={RESIDENTS_URL} onAdd={() => setIsAddResidentDialogOpen(true)}/>
        <AddResidentDialog isOpen={isAddResidentDialogOpen} setIsOpen={setIsAddResidentDialogOpen} />
    </div>
}

export default ResidentPage;