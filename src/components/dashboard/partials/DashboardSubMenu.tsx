import Link from "next/link";
import { usePathname } from "next/navigation";
interface IDashboardSubMenu {
    pathname: string;
    title: string;
    sidebarExpanded: boolean
}
export default function DashboardSubMenu({ pathname, title, sidebarExpanded }: IDashboardSubMenu) {
    const currentPath = usePathname();
    return (
        <li className="mb-1 last:mb-0">
            <Link
                href={pathname}
            >
                <span className={`
                text-sm font-medium 
                 ${sidebarExpanded ? 'lg:opacity-100' : 'lg:opacity-0'}  

                 ${currentPath === pathname ? 'text-indigo-500' : 'text-slate-100'}  
                 2xl:opacity-100 duration-20
                  `}>
                    {title}
                </span>
            </Link>
        </li>
    )
}
