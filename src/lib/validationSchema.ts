import { z } from 'zod';

export const SignUpSchema = z.object({
    fullNames: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
    email: z.string().nonempty("Email address is required").email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().nonempty(),
    identityNumber: z.string().nonempty("Identity number is required").length(13, "Identity number must be 13 characters")
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});

export const LoginSchema = z.object({
    email: z.string().nonempty("Email address is required").email("Invalid email address"),
    password: z.string().nonempty("Password is required")
});

export const ResidentSchema = z.object({
    fullNames: z.string().nonempty("Full name is required"),
    lastName: z.string().nonempty("Last name is required"),
    identityNumber: z.string().nonempty("Identity number is required").length(13, "Identity number must be 13 characters")
});

export const MunicipalitySchema = z.object({
    name: z.string().nonempty("Municipality name is required"),
    telephone: z.string().nonempty("Telephone number is required").length(10, "Telephone number must be 10 characters"),
    email: z.string().nonempty("Email address is required").email("Invalid email address"),
    address: z.string().nonempty("Address is required"),
    buildingName: z.string().optional(),
});

export const MyAddressSchema = z.object({
    name: z.string().nonempty("Name is required"),
    address: z.string().nonempty("Address is required"),
    municipalityId: z.string().nonempty("Municipality is required"),
    verificationDocument: z.string().optional(),
    wardNo: z.string().nonempty("Ward number is required")
    // verificationDocument: z.instanceof(File)
    //     .refine((file: File) => file === null, "File is required.")
    //     .refine((file: File) => ["PDF", "pdf"].includes(file.type), "Unsupported file type. Only PDF files are allowed.")
    //     .refine((file: File) => file.size <= 5 * 1024 * 1024, "File size exceeds 5MB limit."),
});