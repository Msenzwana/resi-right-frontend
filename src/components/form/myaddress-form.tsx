import { MyAddressSchema } from "@/lib/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SelectionField } from "../selection-field";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import MyAddressModel from "@/model/MyAddress";

interface MyAddressFormProps {
    item: MyAddressModel;
}

const MyAddressFrom: FC<MyAddressFormProps> = ({ item }) => {
    const form = useForm({
        resolver: zodResolver(MyAddressSchema),
        defaultValues: {
            address: item.address || "",
            name: item.name || "",
            verificationDocument: item.name || "",
            municipalityId: item.municipalityId || "",
            wardNo: item.wardNo || "",
        }
    });

    const onSubmit = async (values: z.infer<typeof MyAddressSchema>) => {
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
                            <Input placeholder="e.g. Home Address" type="text" className="h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            {!!!item.id ?
                <>
                    <FormField
                        name="address"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="pb-2">
                                <FormLabel htmlFor="address">
                                    Address
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. 62 Pegasus Road, Mariannheights, Pinetown, 3610" type="text" className="h-10" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        name="wardNo"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="pb-2">
                                <FormLabel htmlFor="addressNo">
                                    Ward No
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. 16" type="number" className="h-10" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <div className="pb-2">
                        <SelectionField
                            control={form.control}
                            name="municipalityId"
                            options={
                                [
                                    { label: "EThekwini Municipality", value: "1" },
                                    { label: "City of Johannesburg", value: "2" }
                                ]
                            }
                            placeholder="Select a municipality"
                            label="Municipality" />
                    </div>
                    <FormField
                        name="verificationDocument"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="pb-2">
                                <FormLabel htmlFor="verificationDocument">
                                    Verification Document
                                </FormLabel>
                                <FormControl>
                                    <Input type="file" className="h-10" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                </> : null}
            <Button variant="outline" type="submit" className="bg-blue-500 cursor-pointer text-white font-bold mt-1">Add</Button>
        </form>
    </Form>
}

export default MyAddressFrom;