import React, { useState, useEffect, useRef } from 'react';

import SidebarLinkGroup from './SidebarLinkGroup';
import Link from 'next/link';
import Image from 'next/image';
import DashboardMenu from './DashboardMenu';
import DashboardMenuCloseButton from './DashboardMenuCloseButton';
import { BsDash } from 'react-icons/bs';
import DashboardSubMenu from './DashboardSubMenu';
import { IDashboardMenuItem, adminDashboardMenu } from '../constant/adminDashboardMenu';

function Sidebar({ sidebarOpen, setSidebarOpen }: any) {

  const trigger = useRef(null) as any;
  const sidebar = useRef(null) as any;


  const [sidebarExpanded, setSidebarExpanded] = useState<any>(true);


  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });


  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });


  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 ${sidebarExpanded && "lg:!w-64"} 2xl:!w-64 shrink-0 bg-blue-950 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'
          }`}
      >

        <div className="flex justify-between mb-5  sm:px-2">

          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          <Link href={'/'} className='lg:w-[300px] w-[50px]'>
            {
              sidebarExpanded ? <Image src={'/assets/logo/logo-no-background.png'} width={170} height={170} alt='logo' />
                :
                <Image src={'/assets/logo/logo.png'} width={100} height={100} alt='logo' />
            }
          </Link>
        </div>


        <div className="space-y-8">

          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className={`hidden lg:block  ${sidebarExpanded && "lg:hidden"}  2xl:hidden text-center w-6 `} aria-hidden="true">
                •••
              </span>
              <span className={`lg:hidden ${sidebarExpanded && "lg:block"}   2xl:block `}>Pages</span>
            </h3>
            <ul className="mt-3">
              {adminDashboardMenu?.map((menu: IDashboardMenuItem, index: number) =>
                <DashboardMenu
                  key={index}
                  icon={menu?.icon}
                  pathname={menu?.pathname}
                  title={menu?.title}
                  setSidebarExpanded={setSidebarExpanded}
                  sidebarExpanded={sidebarExpanded}>
                  {
                    menu?.children &&
                    menu?.children?.map((subMenu: IDashboardMenuItem, index: number) => <DashboardSubMenu
                      key={index}
                      title={subMenu?.title}
                      pathname={subMenu?.pathname}
                      sidebarExpanded={sidebarExpanded}
                    />)
                  }

                </DashboardMenu>)
              }

            </ul >
          </div >

        </div >

        {/* Expand / collapse button */}
        <DashboardMenuCloseButton
          setSidebarExpanded={setSidebarExpanded}
          sidebarExpanded={sidebarExpanded} />
      </div >
    </div >
  );
}

export default Sidebar;
