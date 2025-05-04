// "use client";

import { MunicipalitySchema } from "@/lib/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

const MunicipalityForm: FC = () => {
    const form = useForm({
        resolver: zodResolver(MunicipalitySchema),
        defaultValues: {
            address: "",
            name: "",
            telephone: "",
            email: ""
        }
    });

    const onSubmit = async (values: z.infer<typeof MunicipalitySchema>) => {
        console.log(values);
        // Handle form submission logic here
    }

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-1 w-full">
            <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                    <FormItem className="pb-2">
                        <FormLabel htmlFor="name">
                            Name
                        </FormLabel>
                        <FormControl>
                            <Input required placeholder="e.g. EThekwini Municipality" type="text" className="h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            <FormField
                name="buildingName"
                control={form.control}
                render={({ field }) => (
                    <FormItem className="pb-2">
                        <FormLabel htmlFor="buildingName">
                            Bulding Name
                        </FormLabel>
                        <FormControl>
                            <Input placeholder="e.g. Civic Centre, Shell House" type="text" className="h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            <FormField
                name="address"
                control={form.control}
                render={({ field }) => (
                    <FormItem className="pb-2">
                        <FormLabel htmlFor="address">
                            Address
                        </FormLabel>
                        <FormControl>
                            <Input required placeholder="e.g. Anton Lembede Street, Ethekwini, 4001" type="text" className="h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            <FormField
                name="telephone"
                control={form.control}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel htmlFor="telephone">
                            Telephone
                        </FormLabel>
                        <FormControl>
                            <Input required placeholder="e.g. 0312345678" type="tel" className="h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel htmlFor="email">
                            Email
                        </FormLabel>
                        <FormControl>
                            <Input placeholder="e.g. ethekwini@gov.za" type="email" className="h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            <Button variant="outline" type="submit" className="bg-blue-500 cursor-pointer text-white font-bold mt-1">Add</Button>
        </form>
    </Form>

}

export default MunicipalityForm;