import { FC } from "react";
import { Skeleton } from "../ui/skeleton";

const TableSkeleton: FC = () => {
    return <div className="w-full">
        <div className="flex items-center py-4">
            <Skeleton className="h-16 w-full bg-gray-200" />
        </div>
    </div>
    return <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
        </div>
    </div>
}

export default TableSkeleton;