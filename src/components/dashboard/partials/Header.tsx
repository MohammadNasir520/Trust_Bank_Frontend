
'use client'
import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { useAppSelector } from '@/redux/hook';
import { decodedToken } from '@/utils/jwt';
import { authKey } from '@/constants/storageKey';
import { getFromLocalStorage } from '@/utils/local-storage';
import { useLoggedUserQuery } from '@/redux/api/userApi';
import { IoIosArrowDown } from 'react-icons/io';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { PiGearSix, PiSignOutLight, PiSignOutThin, PiUserCircle, PiUserCircleLight } from 'react-icons/pi';
import Link from 'next/link';

function Header({ sidebarOpen, setSidebarOpen }: any) {

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const { data: userData } = useLoggedUserQuery()
  const user = userData?.data;
  console.log({ user })
  return (
    <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            <div>
              <button
                className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full ml-3 ${searchModalOpen && 'bg-slate-200'
                  }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchModalOpen(true);
                }}
                aria-controls="search-modal"
              >
                <span className="sr-only">Search</span>
                <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="fill-current text-slate-500 dark:text-slate-400"
                    d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                  />
                  <path
                    className="fill-current text-slate-400 dark:text-slate-500"
                    d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                  />
                </svg>
              </button>

            </div>

            <ThemeToggle />
            <div className='flex items-center gap-1'>
              <Menu>
                <MenuButton>
                  <img src="https://bit.ly/kent-c-dodds" className='w-8 h-8 rounded-full' alt="" />
                </MenuButton>
                <MenuList className='bg-white min-w-52 rounded px-3 py-2  shadow-xl'>
                  <div className='flex flex-col justify-center items-center border-b pb-2'>
                    <img src="https://bit.ly/kent-c-dodds" className='w-16 h-16 rounded-full' alt="" />
                    <h1 className='capitalize'>{user?.name}</h1>
                    <p className='text-xs'>{user?.email}</p>
                  </div>
                  <div className='flex flex-col   my-2'>
                    <Link href={'/dashboard/profile/account'} className='flex gap-1 text-sm items-center hover:bg-blue-500 p-2 rounded hover:text-white'><PiUserCircle className='text-lg' />My Profile</Link>
                    <p className='flex gap-1 cursor-pointer text-sm items-center hover:bg-blue-500 p-2 rounded hover:text-white'><PiGearSix className='text-lg' />Settings</p>
                    <p className='flex gap-1 cursor-pointer text-sm items-center hover:bg-blue-500 p-2 rounded hover:text-white'><PiSignOutLight className='text-lg' />Sign out</p>
                  </div>
                </MenuList>
              </Menu>


            </div>
          </div>
        </div>
      </div>
    </header >
  );
}

export default Header;
