"use client";

import * as React from "react";
import { Controller } from "react-hook-form";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FC, useState } from "react";

type Option = {
    label: string;
    value: string;
};

interface SelectionFieldProps {
    name: string;
    control: any; // you can improve typing later if needed
    options: Option[];
    placeholder?: string;
    label?: string;
}


export const SelectionField: FC<SelectionFieldProps> = ({ name, control, options, placeholder = "Select an option...", label}) => {
    const [open, setOpen] = useState(false);
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                const selectedOption = options.find(
                    (option) => option.value === field.value
                );

                return (
                    <FormItem className="pb-2">
                        {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
                        <Popover open={open} onOpenChange={setOpen} modal={false}>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        className="w-full justify-between"
                                    >
                                        {selectedOption ? selectedOption.label : placeholder}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" forceMount>
                                <Command>
                                    <CommandInput placeholder="Search..." className="h-9" />
                                    <CommandList>
                                        <CommandEmpty>No option found.</CommandEmpty>
                                        <CommandGroup>
                                            {options.map((option) => (
                                                <CommandItem
                                                    key={option.value}
                                                    value={option.value}
                                                    onSelect={(currentValue) => {
                                                        field.onChange(currentValue);
                                                        setOpen(false);
                                                    }}
                                                >
                                                    {option.label}
                                                    <Check
                                                        className={cn(
                                                            "ml-auto h-4 w-4",
                                                            field.value === option.value
                                                                ? "opacity-100"
                                                                : "opacity-0"
                                                        )}
                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                        <FormMessage>
                            {control?.formState?.errors[name]?.message}
                        </FormMessage>
                    </FormItem>
                );
            }}
        />
    );
}
