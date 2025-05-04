"use client"

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import MyAddressModel from "@/model/MyAddress";
import { fetcher, RESIDENT_ADDRESS_URL } from "@/services/base";
import { Activity, Circle, DownloadCloud, Edit, EllipsisVertical, Plus, Trash } from "lucide-react";
import { useParams } from "next/navigation";
import { FC, useState } from "react";
import useSWR from "swr";
import AddMyAddressDialog from "../add-myaddress-dialog";

const initialAddress: MyAddressModel = {
    id: 0,
    name: "",
    address: "",
    wardNo: "",
    status: 0,
    residentId: "",
    verificationDocument: "",
    municipalityId: ""
}
const MyAddress: FC = () => {
    const param = useParams();
    const { data, error, isLoading } = useSWR(`${RESIDENT_ADDRESS_URL}?residentId=${param.residentId}`, fetcher);
    const [isMyAddressDialogOpen, setIsMyAddressDialogOpen] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState<MyAddressModel>(initialAddress);

    const getStatusColor = (status: number) => {
        switch (status) {
            case 0:
                return "red";
            case 1:
                return "green";
            case 2:
                return "orange";
            default:
                return "grey";
        }
    }

    const onEdit = (item: MyAddressModel, fakeIndexForNow: number) => {
        const updatedItem = {
            ...item,
            name: "Home",
            id: 1
        }
        setSelectedAddress(updatedItem);
        setIsMyAddressDialogOpen(true);
    }

    const onClose = () => {
        setIsMyAddressDialogOpen(false);
        // setSelectedAddress(initialAddress);
    }

    const onAdd = () => {
        setSelectedAddress(initialAddress);
        setIsMyAddressDialogOpen(true)
    }

    return <>
        <div className="flex flex-col ">
            <div className="flex flex-col">
                <span className="text-4xl font-bold">My Address</span>
                <span className="text-lg text-gray-500">Manage your address</span>
            </div>
            <hr className="mt-2.5 mb-3" />

            <div className="grid grid-cols-4 gap-4">
                {
                    [1, 2, 3, 4, 5, 6].map((item, index) => {
                        return <Card key={index}>
                            <CardHeader>
                                <CardTitle>Home</CardTitle>
                                <CardDescription>31 Julia Rd, Musgrave, Durban, 3610</CardDescription>
                            </CardHeader>
                            <CardFooter className="flex flex-row justify-between">
                                <div className="flex flex-row space-x-2">
                                    <Circle fill={getStatusColor(index)} color="transparent" size={"1.5rem"} />
                                    <span className="text-sm text-gray-500">Default</span>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant={"ghost"}>
                                            <EllipsisVertical />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>
                                            <DownloadCloud />
                                            <span className="ml-2">Download</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Trash />
                                            <span className="ml-2">Delete</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => onEdit(initialAddress, index)}>
                                            <Edit />
                                            <span className="ml-2">Edit</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Activity />
                                            <span className="ml-2">History</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </CardFooter>
                        </Card>
                    })
                }
            </div>
            <div className="fixed bottom-6 right-6 z-50">
                <Button className="rounded-full h-14 w-14 p-0 shadow-lg" size="icon" onClick={onAdd}>
                    <Plus className="h-6 w-6" />
                </Button>
            </div>
        </div>
        <AddMyAddressDialog isOpen={isMyAddressDialogOpen} item={selectedAddress} onClose={onClose} setIsOpen={setIsMyAddressDialogOpen} />
    </>
}

export default MyAddress;