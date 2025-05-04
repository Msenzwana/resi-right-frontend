import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table } from "@tanstack/react-table";
import { ChevronDown, Plus } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface TableSearchProps {
    table: Table<any>;
    onAdd?: () => void;
}

const TableSearch: FC<TableSearchProps> = ({ table, onAdd }) => {
    return <div className="flex flex-row justify-between py-4">
        <div className="">
        
        </div>
        {/* <Input
            placeholder="Filter emails..."
            value={(table.getColumn("emailAddress")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
                table.getColumn("emailAddress")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
        /> */}

        <div className="flex space-x-2">
            <Button className="cursor-pointer" onClick={onAdd}>
                <Plus className="mr-1 h-4 w-4" />
                Add
            </Button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto cursor-pointer">
                        Columns <ChevronDown />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {table
                        .getAllColumns()
                        .filter((column) => column.getCanHide())
                        .map((column) => {
                            return (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) =>
                                        column.toggleVisibility(!!value)
                                    }>
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                            )
                        })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
}

export default TableSearch;