"use client";

import { SignUpSchema } from "@/lib/validationSchema";
import Register from "@/model/Register";
import { register } from "@/services/authService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

const RegisterForm: FC = () => {
    const form = useForm({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            fullNames: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            identityNumber: ""
        }
    });
    const router = useRouter();

    const navigateToLogin = (e: any) => {
        e.preventDefault();
        router.push("/auth/login");
    }

    const onRegister = async (values: z.infer<typeof SignUpSchema>) => {
        const userToRegister: Register = {
            fullNames: values.fullNames,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            identityNumber: values.identityNumber,
            role: "resident"
        }

        register(userToRegister).then((response) => {
            // if (response.status === 201) {
                router.push("/auth/login");
            // }
        }).catch((error) => {
            console.log(error);
        })
    }

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onRegister)} className="flex flex-col space-y-1 w-full px-16">
            <FormField
                name="fullNames"
                control={form.control}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel />
                        <FormControl>
                            <Input placeholder="Full Name(s)" type="text" className="h-11" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            <FormField
                name="lastName"
                control={form.control}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel />
                        <FormControl>
                            <Input placeholder="Last Name" type="text" className="h-11" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            <FormField
                name="identityNumber"
                control={form.control}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel />
                        <FormControl>
                            <Input placeholder="Identity Number" type="text" className="h-11" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel />
                        <FormControl>
                            <Input placeholder="Email" type="email" className="h-11" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel />
                        <FormControl>
                            <Input placeholder="Password" type="password" className="h-11" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            <FormField
                name="confirmPassword"
                control={form.control}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel />
                        <FormControl>
                            <Input placeholder="Confirm Password" type="password" className="h-11" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            <Button variant="outline" type="submit" className="bg-blue-500 cursor-pointer text-white font-bold mt-1">Sign Up</Button>
            <span className="text-xs text-center pt-5 font-semibold">Already have an account? <button className="cursor-pointer" onClick={navigateToLogin} style={{ color: "#FD6B22" }}>Sign In</button></span>

        </form>
    </Form>
}

export default RegisterForm;