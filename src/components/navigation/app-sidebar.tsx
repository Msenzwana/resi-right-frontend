"use client"

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import LogoIcon from "@/images/icon.png";
import { Building2Icon, ChartArea, LocateIcon, MapPinCheck, User, UsersRoundIcon } from "lucide-react";
import { NavUser } from "./nav-users";
import { NavMain } from "./nav-main";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const data = {
        user: {
            name: "shadcn",
            email: "m@example.com",
            avatar: "/avatars/shadcn.jpg",
        },
        items: [
            {
                title: "Dashboard",
                url: "/resiright/dashboard",
                icon: ChartArea,
            },
            {
                title: "Municipalities",
                url: "/resiright/municipality",
                icon: Building2Icon,
            },
            {
                title: "Residents",
                url: "/resiright/resident",
                icon: UsersRoundIcon,
            },
            {
                title: "My Address",
                url: "/resiright/myaddress",
                icon: MapPinCheck,
            },
        ],
    }

    return <Sidebar collapsible="icon" variant="sidebar" className=" text-white" style={{ backgroundImage: "linear-gradient(#09203F, #537895)"  }} {...props}>
        <SidebarHeader className="flex flex-row">
            <img src={LogoIcon.src} alt="Logo" className="w-20 h-15" />
            <div className="flex flex-col">
                <span className="font-semibold text-2xl">ResiRight</span>
                <span>v1.0.0.0</span>
            </div>
        </SidebarHeader>
        <SidebarContent>
            <NavMain items={data.items} />
        </SidebarContent>
        <SidebarFooter>
            <NavUser user={data.user} />
        </SidebarFooter>
        <SidebarRail />
    </Sidebar>
}

export default AppSidebar;