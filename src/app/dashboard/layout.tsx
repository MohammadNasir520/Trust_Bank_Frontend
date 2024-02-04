'use client'
import Header from "@/components/dashboard/partials/Header";
import Sidebar from "@/components/dashboard/partials/Sidebar";
import { useState } from "react";


function Dashboard({ children }: { children: React.ReactElement | React.ReactNode }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative flex flex-col bg-[#f4f4f4]  flex-1 overflow-y-auto overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                    <div className="px-4   sm:px-6 h-full  rounded   lg:px-4 py-4 w-full max-w-9xl ">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;