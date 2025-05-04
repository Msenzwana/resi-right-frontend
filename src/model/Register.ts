import { ROLE } from "./Role";

interface Register {
    fullNames: string;
    lastName: string;
    identityNumber: string;
    email: string;
    password: string;
    role: ROLE
}

export default Register;