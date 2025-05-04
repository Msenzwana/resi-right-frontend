"use client"

import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { FC, useState } from "react";
import useSWR from "swr";
import Pagination from "./pagination";
import TableContent from "./table-content";
import TableSearch from "./table-search";
import TableSkeleton from "./table-skeleton";

interface TableCustomProps {
    url: string;
    columns: ColumnDef<any>[];
    onAdd?: () => void;
}
const fetcher = (url: string) => fetch(url).then((res) => res.json())

const TableCustom: FC<TableCustomProps> = ({ url, columns, onAdd }) => {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})
    const { error, data, isLoading } = useSWR(url, fetcher)

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    const getError = (): React.ReactElement => {
        return <>Error fetching data</>
    }

    return <div className="w-full">
        {isLoading ? <TableSkeleton /> :
            error ? getError() :
                <>
                    <TableSearch table={table} onAdd={onAdd} />
                    <TableContent table={table} columns={columns} />
                    <Pagination table={table} />
                </>}
    </div>
}

export default TableCustom;