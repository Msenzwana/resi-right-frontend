"use client";

import TableCustom from "@/components/custom-table/table-custom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Municipality from "@/model/Municipality";
import { MUNICIPALITY_URL } from "@/services/base";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { FC, useState } from "react";
import AddMunicipalityDialog from "./add-municipality-dialog";

const MunicipalityPage: FC = () => {
    const [isAddMunicipalityDialogOpen, setIsAddMunicipalityDialogOpen] = useState(false);
    const columns: ColumnDef<Municipality>[] = [
        {
            accessorKey: "name",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Name
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("name")}</div>
            ),
        },
        {
            accessorKey: "emailAddress",

            header: "Email",
            cell: ({ row }) => <div className="lowercase">{row.getValue("emailAddress")}</div>,
        },
        {
            accessorKey: "telephoneNumber",
            header: "Telephone Number",
            cell: ({ row }) => <div className="lowercase">{row.getValue("telephoneNumber")}</div>,
        },
        {
            accessorKey: "address",
            header: "Address",
            cell: ({ row }) => <div className="lowercase">{row.getValue("address")}</div>,
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
            <span className="text-4xl font-bold"> Municipalities</span>
            <span className="text-lg text-gray-500">Manage your municipalities</span>
        </div>
        <hr className="mt-2.5 mb-3" />
        <TableCustom columns={columns} url={MUNICIPALITY_URL} onAdd={() => setIsAddMunicipalityDialogOpen(true)}/>
        <AddMunicipalityDialog isOpen={isAddMunicipalityDialogOpen} setIsOpen={setIsAddMunicipalityDialogOpen} />
    </div>
}

export default MunicipalityPage;