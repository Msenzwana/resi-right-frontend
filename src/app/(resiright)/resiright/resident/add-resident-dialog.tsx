"use client";

import ResidentForm from "@/components/form/resident-form";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import React, { FC } from "react";

interface AddResidentDialogProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddResidentDialog: FC<AddResidentDialogProps> = ({ isOpen, setIsOpen }) => {
    return <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-white border-0 text-black sm:max-w-[425px]">
            <DialogTitle>Add Resident</DialogTitle>
            <DialogDescription>
                <span>Fill in the details of the resident you want to add.</span>
            </DialogDescription>
            <div className="w-full">
                <ResidentForm />
            </div>
        </DialogContent>

    </Dialog>
}

export default AddResidentDialog;