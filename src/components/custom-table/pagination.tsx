import { Table } from "@tanstack/react-table";
import { FC } from "react";
import { Button } from "../ui/button";

interface PaginationProps {
    table: Table<any>;
}

const Pagination: FC<PaginationProps> = ({ table }) => {
    return <div className="flex items-center justify-end space-x-2 py-4">
       
        <div className="space-x-2">
            <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
            >
                Previous
            </Button>
            <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
            >
                Next
            </Button>
        </div>
    </div>
}

export default Pagination;