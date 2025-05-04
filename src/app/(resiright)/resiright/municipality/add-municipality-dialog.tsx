"use client";

import MunicipalityForm from "@/components/form/municipality-form";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import React, { FC } from "react";

interface AddMunicipalityDialogProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddMunicipalityDialog: FC<AddMunicipalityDialogProps> = ({ isOpen, setIsOpen }) => {
    return <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-white border-0 text-black sm:max-w-[425px]">
            <DialogTitle>Add Municipality</DialogTitle>
            <DialogDescription>
                <span>Fill in the details of the municipality you want to add.</span>
            </DialogDescription>
            <div className="w-full">
                <MunicipalityForm />
            </div>
        </DialogContent>
    </Dialog>
}

export default AddMunicipalityDialog;