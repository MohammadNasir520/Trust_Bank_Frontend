//@ts-nocheck

import React, { useState, useRef, useEffect } from "react";


import Link from "next/link";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

function DropdownProfile() {


  return (
    <div className="relative inline-flex">


      <Menu>
        <MenuButton as={Button} >
          <div className="flex">
            <img
              className="w-8 h-8 rounded-full"
              src={'/assets/managers/images.jpeg'}
              width="32"
              height="32"
              alt="User"
            />
            <div className="flex items-center truncate">
              <span className="truncate ml-2 text-sm font-medium dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200">
                Admin
              </span>
              <svg
                className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
                viewBox="0 0 12 12"
              >
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
              </svg>
            </div>
          </div>


        </MenuButton>
        <MenuList className="bg-white px-4 py-3 border rounded-md">
          <MenuItem>Ahmed Admin</MenuItem>
          <MenuItem> <span className="italic text-gray-500">Admin</span></MenuItem>
          <hr className="my-2" />
          <MenuItem ><span className="text-blue-600">Sign Out</span></MenuItem>

        </MenuList>
      </Menu>


    </div >
  );
}

export default DropdownProfile;
