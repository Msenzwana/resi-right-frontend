"use client"

import { useSession } from "next-auth/react";
import { FC } from "react";

const DashboardPage: FC = () => {
    const { data: session } = useSession();

    console.log(session);

    return <>
    </>
}

export default DashboardPage;