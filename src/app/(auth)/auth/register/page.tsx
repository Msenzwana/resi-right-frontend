import RegisterForm from '@/components/form/register-form';
import { FC } from 'react';

const Register: FC = () => {
    return <div className="flex flex-row w-full h-full">
        <div className="lg:flex flex-col w-1/2 hidden border-r-2 border-black">
        </div>
        <div className="flex flex-col lg:w-1/2 w-full items-center justify-center ">
            <span className="text-2xl font-bold text-center px-16" style={{ color: "#FD6B22" }}>Join us as we aim on simplifying residents needs with a click.</span>
            <RegisterForm/>
        </div>
    </div>
}

export default Register;