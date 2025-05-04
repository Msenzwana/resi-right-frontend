// "use client";

import { ResidentSchema } from "@/lib/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

const ResidentForm: FC = () => {
    const form = useForm({
        resolver: zodResolver(ResidentSchema),
        defaultValues: {
            fullNames: "",
            identityNumber: "",
            lastName: ""
        }
    });

    const onSubmit = async (values: z.infer<typeof ResidentSchema>) => {
        console.log(values);
        // Handle form submission logic here
    }

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-1 w-full">
            <FormField
                name="fullNames"
                control={form.control}
                render={({ field }) => (
                    <FormItem className="pb-2">
                        <FormLabel>
                            Full Name(s)
                        </FormLabel>
                        <FormControl>
                            <Input placeholder="e.g. Senzo Nkanyezi" type="text" className="h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            <FormField
                name="lastName"
                control={form.control}
                render={({ field }) => (
                    <FormItem className="pb-2">
                        <FormLabel >
                            Last Name
                        </FormLabel>
                        <FormControl>
                            <Input placeholder="e.g. Ntuli" type="text" className="h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            <FormField
                name="identityNumber"
                control={form.control}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            Identity Number
                        </FormLabel>
                        <FormControl>
                            <Input placeholder="e.g. 9805032233081" type="password" className="h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            <Button variant="outline" type="submit" className="bg-blue-500 cursor-pointer text-white font-bold mt-1">Add</Button>
        </form>
    </Form>

}

export default ResidentForm;