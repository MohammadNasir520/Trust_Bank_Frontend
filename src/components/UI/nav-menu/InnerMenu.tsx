"use client";

//@ts-nocheck

import { Menu, MenuButton, MenuList, useDisclosure } from "@chakra-ui/react";
import React, { useRef, useEffect, useCallback, useState } from "react";

import { IoChevronDownCircleOutline } from "react-icons/io5";

import { FaAngleDown } from "react-icons/fa";
import { MenuItemSubMenu, MenuItems } from ".";
import Link from "next/link";

function addEL(ref: any, event: any, handler: any) {
  if (ref) ref.addEventListener(event, handler);
}
function remEL(ref: any, event: any, handler: any) {
  if (ref) ref.removeEventListener(event, handler);
}

export default function InnerMenu({ title, childrenItems }: any) {
  const refSubMenuButton: any = useRef();
  const refSubMenuList: any = useRef();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const subMenuButtonEnterHandle = useCallback(() => {
    onOpen();

    refSubMenuList.current.style.pointerEvents = "auto";
  }, [onOpen]);
  const subMenuButtonLeaveHandle = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      refSubMenuList.current.style.pointerEvents = "none";
    } else {
    }
  }, [isOpen]);

  useEffect(() => {
    addEL(refSubMenuButton.current, "mouseenter", subMenuButtonEnterHandle);
    addEL(refSubMenuList.current, "mouseenter", subMenuButtonEnterHandle);
    addEL(refSubMenuButton.current, "mouseleave", subMenuButtonLeaveHandle);
    addEL(refSubMenuList.current, "mouseleave", subMenuButtonLeaveHandle);

    return () => {
      remEL(refSubMenuButton.current, "mouseenter", subMenuButtonEnterHandle);
      remEL(refSubMenuList.current, "mouseenter", subMenuButtonEnterHandle);
      remEL(refSubMenuButton.current, "mouseleave", subMenuButtonLeaveHandle);
      remEL(refSubMenuList.current, "mouseleave", subMenuButtonLeaveHandle);
    };
  }, [subMenuButtonEnterHandle, subMenuButtonLeaveHandle]);

  const isBrowser = typeof window !== "undefined";

  const [screenSize, setScreenSize] = useState<any>(
    isBrowser ? window.innerWidth : null
  );
  const [placement, setPlacement] = useState<string>();
  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isBrowser]);
  useEffect(() => {
    if (screenSize <= 800) {
      setPlacement("bottom-start");
    } else {
      setPlacement("right");
    }
  }, [screenSize]);

  return (
    <Menu
      autoSelect={false}
      offset={[0, 0]}
      isOpen={isOpen}
      placement={placement as "bottom-start" | "right"}
    >
      <MenuButton
        ref={refSubMenuButton}
        // rightIcon={<IoChevronDownCircleOutline />}
        _expanded={{
          bg: "#e6eef7",
          color: "#012169",
        }}
        // className='hover:text-[#012169] font-semibold'
        className="hover:text-[#012169] px-2 py-1  rounded w-[300px] text-start   hover:bg-[#e6eef7]  duration-200 "
      >
        <div className="flex justify-between items-center">
          <span> {title}</span> <FaAngleDown className="inline" />
        </div>
      </MenuButton>
      <MenuList
        minW={0}
        ref={refSubMenuList}
        zIndex={999}
        _hover={{ zIndex: 1000 }}
        className="bg-white z-[99] p-4 absolute w-[300px] rounded-lg border"
      >
        {childrenItems.map((item: any, i: number) => (
          <>
            {!item?.children && (
              <MenuItems key={item?.label}>
                <Link href={item?.link}>{item?.label}</Link>
              </MenuItems>
            )}{" "}
            {item?.children && (
              <MenuItemSubMenu>
                <InnerMenu title={item?.label} childrenItems={item?.children} />
              </MenuItemSubMenu>
            )}
          </>
        ))}
      </MenuList>
    </Menu>
  );
}
