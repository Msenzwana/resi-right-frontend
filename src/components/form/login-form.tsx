"use client";

import { LoginSchema } from "@/lib/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

const LoginForm: FC = () => {
    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const router = useRouter();

    const onForgotPasswordClicked = () => {
        toast.info("Forgot Password clicked", { position: "top-center" });
    }

    const navigateToRegister = (e: any) => {
        e.preventDefault();
        router.push("/auth/register")
    }

    const onLogin = async (values: z.infer<typeof LoginSchema>) => {
        const response = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        });

        if (response?.error) {
            toast.error("Invalid email or password", { position: "top-center" });
            return;
        }

        toast.success("Login successful", { position: "top-center" });
        router.push("/resiright/dashboard");
    }

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onLogin)} className="flex flex-col space-y-1">
            <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel />
                        <FormControl>
                            <Input placeholder="Username" type="text" className="h-11 w-72" {...field} />
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
                            <Input placeholder="Password" type="password" className="h-11 w-72" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            <span onClick={onForgotPasswordClicked} className="cursor-pointer" style={{ color: "#FD6B22", fontSize: "0.75rem", fontFamily: "sans-serif" }}>Forgot Password?</span>
            <Button variant="outline" className="bg-blue-500 text-white font-bold cursor-pointer hover:bg-green-700 hover:text-white" type="submit">Sign In</Button>
            <span className="text-xs text-center pt-5 font-semibold">Don't have an account? <button className="cursor-pointer" onClick={navigateToRegister} style={{ color: "#FD6B22" }}>Sign Up</button></span>
        </form>
    </Form>
}

export default LoginForm;