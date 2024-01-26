'use client'
//@ts-nocheck
import Image from "next/image";

import { BiMenu } from "react-icons/bi";
import { FaSearch, FaWhatsapp } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";


import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    useDisclosure,
    //@ts-ignore
} from '@chakra-ui/react'

import { useRef } from "react";


import { cardNavMenuOptions, loanNavMenuOptions } from "@/constants/navData";
import NavMenu from "../UI/nav-menu/NavMenu";
import ResponsiveNavMenu from "../UI/nav-menu/ResponsiveNavMenu";
import Link from "next/link";



export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const infoItems = <div className="flex  justify-end gap-4 lg:mt-0 mt-3 lg:pr-0 pr-2 text-xl lg:text-white text-black">
        <button>
            <FaWhatsapp />
        </button>
        <button>
            <FaSearch />
        </button>
        <button>
            <IoMdNotificationsOutline />
        </button>

    </div>
    return (
      <>
        <div className="sticky top-0 z-[99] lg:h-[105px] h-[67px] 	bg-white  ">
          <div className=" ">
            <div className="grid grid-cols-8 overflow-hidden ">
              <div
                className="
                    bg-[#012169] py-3 lg:col-span-2 col-span-4
                    lg:pl-20 pl-10 flex items-center gap-3 rounded-br-2xl ml-[-30px]
                    p-16"
                style={{ transform: "skew(-30deg)" }}
              >
                <div
                  style={{ transform: "skew(30deg)" }}
                  className="text-2xl lg:hidden text-white "
                >
                  <Button colorScheme="teal" onClick={onOpen}>
                    <BiMenu />
                  </Button>
                </div>
                <Link href="/">
                  <Image
                    src={"/assets/logo/logo-no-background.png"}
                    height={170}
                    width={200}
                    alt="logo"
                    className=""
                    style={{ transform: "skew(30deg)" }}
                  />
                </Link>
              </div>
              <div className=" lg:col-span-6 col-span-4 h-full  ">
                <div className="flex flex-col justify-between w-full      ">
                  <div className="bg-[#012169] text-white py-2  flex justify-between h-1/2  w-full pr-16">
                    <div className="lg:flex hidden gap-5 ml-6">
                      <p className="text-sm">Dashboard</p>
                      <span className="text-sm">About</span>
                    </div>
                    <div className="lg:block hidden">{infoItems}</div>
                  </div>
                  <div className="lg:flex hidden justify-between my-auto p-5 text-black h-1/2  w-full  ">
                    <div className="flex text-[16px]  font-medium   gap-5">
                      <NavMenu items={loanNavMenuOptions} title="Loan" />
                      <NavMenu items={loanNavMenuOptions} title="Investment" />
                      <NavMenu items={loanNavMenuOptions} title="Insurance" />
                      <NavMenu items={cardNavMenuOptions} title="Card" />
                      <NavMenu items={loanNavMenuOptions} title="Deposit" />
                      <NavMenu
                        items={loanNavMenuOptions}
                        title="
                        Foreign services"
                      />
                    </div>
                    <div className="flex px-5 gap-5 text-[16px]  font-medium">
                      <p>Profile</p>
                      <Link href="/account">
                        {" "}
                        <p>Open An Account</p>
                      </Link>
                    </div>
                  </div>
                  <div className="lg:hidden   flex justify-end">
                    {" "}
                    {infoItems}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ResponsiveNavMenu isOpen={isOpen} onClose={onClose} />
      </>
    );
}
