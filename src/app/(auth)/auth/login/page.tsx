import LoginForm from "@/components/form/login-form";
import { FC } from "react";
import LogoBlack from '../../../../images/logo_black.png';

const Login: FC = () => {
    return <div className="flex flex-row w-full h-full">
        <div className="flex flex-col lg:w-1/2 w-full items-center justify-center border-r-2 border-black">
            <img src={LogoBlack.src} alt="logo" className="h-62 w-72" />
            <LoginForm />
        </div>
        <div className="lg:flex flex-col w-1/2 hidden">
            
        </div>
    </div>
}

export default Login;