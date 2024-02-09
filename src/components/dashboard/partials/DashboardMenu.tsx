'use client'

import Link from "next/link";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { usePathname, useRouter } from "next/navigation";

interface IDashboardMenu {
    pathname: string;
    icon?: React.ReactElement;
    title: string;
    sidebarExpanded: boolean;
    setSidebarExpanded: any;
    children?: React.ReactElement[] | React.ReactNode

}
export default function DashboardMenu({
    pathname, title, icon, sidebarExpanded, setSidebarExpanded, children
}: IDashboardMenu) {
    const router = useRouter()
    const currentPath = usePathname();

    const handleMenuOpen = (
        e: any, handleClick: any,
        children: any, pathname: string
    ) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
        if (!children) {
            router.push(pathname)
        }
    }

    return (
        <SidebarLinkGroup activecondition={currentPath?.includes(pathname)}>
            {(handleClick: any, open: any) => {
                return (
                    <>
                        <div
                            className={`block cursor-pointer text-slate-200 truncate transition duration-150 
                            ${pathname.includes('dashboard') ? 'hover:text-slate-200' : 'hover:text-white'
                                }`}
                            onClick={(e) => handleMenuOpen(e, handleClick, children, pathname)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    {icon}
                                    <span className="text-sm font-medium ml-3 
                                     lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                        {title}
                                    </span>
                                </div>
                                {/* Icon */}
                                {children && <div className="flex shrink-0 ml-2">
                                    <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
                                        <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                    </svg>
                                </div>}
                            </div>
                        </div>
                        {children &&
                            <div className={` ${sidebarExpanded ? 'lg:block' : 'lg:hidden'} 2xl:block `}>
                                <ul className={`pl-9 mt-1 ${!open && 'hidden'} text-slate-100`}>
                                    {children}
                                </ul>
                            </div>}
                    </>
                );
            }}
        </SidebarLinkGroup>
    )
}
