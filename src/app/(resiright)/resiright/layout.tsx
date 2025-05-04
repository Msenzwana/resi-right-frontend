import AppSidebar from "@/components/navigation/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { FC } from "react";

interface Props {
    children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col w-screen">
            <SidebarTrigger />
            <div className="px-5 py-7">
                {children}
            </div>
        </main>
    </SidebarProvider>
}

export default Layout;