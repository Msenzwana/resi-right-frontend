"use client";

import MyAddressFrom from "@/components/form/myaddress-form";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import MyAddress from "@/model/MyAddress";
import { FC } from "react";

interface AddMyAddressDialogProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    item: MyAddress;
    onClose: () => void;
}

const AddMyAddressDialog: FC<AddMyAddressDialogProps> = ({ isOpen, setIsOpen, item, onClose }) => {
    return <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white border-0 text-black sm:max-w-[425px]" onInteractOutside={(e) => e.preventDefault()}>
            <DialogTitle>Add Address</DialogTitle>
            <DialogDescription>
                <span>Fill in the details of the address you want to add.</span>
            </DialogDescription>
            <div className="w-full">
                <MyAddressFrom item={item} />
            </div>
        </DialogContent>
    </Dialog>
}

export default AddMyAddressDialog;