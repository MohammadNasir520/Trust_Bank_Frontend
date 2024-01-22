//@ts-nocheck


import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    useDisclosure
} from "@chakra-ui/react";
import React, { useRef, useEffect, useCallback } from "react";


import { IoChevronDownCircleOutline } from "react-icons/io5";
import MenuItemSubMenu from "./MenuItemSubMenu";
import MenuItems from "./MenuItems";
import { BiDownArrowAlt } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";

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
        // fix bug with list animation
        refSubMenuList.current.style.pointerEvents = "auto";
    }, [onOpen]);
    const subMenuButtonLeaveHandle = useCallback(() => {
        onClose();
    }, [onClose]);

    // fix bug with list animation,
    // hide it when menu closed and open only if button menu is hovered
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

    return (
        <Menu autoSelect={false} offset={[0, 0]} isOpen={isOpen} placement="right">
            <MenuButton
                ref={refSubMenuButton}
                rightIcon={<IoChevronDownCircleOutline />}
                // as={Button}
                // w="full"
                // textAlign="left"
                // borderRadius="none"
                // bg="white"
                // zIndex={999}
                // _hover={{
                //     // color: "red"
                // }}

                _expanded={{
                    bg: "#e6eef7",
                    color: "#012169"
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
                className='bg-white p-4 absolute w-[300px] rounded-lg border'
            >
                {childrenItems.map((item, i) => <>
                    {!item?.children && <MenuItems key={item?.label}>{item?.label}</MenuItems>}
                    {item?.children && <MenuItemSubMenu>
                        <InnerMenu
                            title={item?.label}
                            childrenItems={item?.children}
                        />
                    </MenuItemSubMenu>}
                </>)}
            </MenuList>
        </Menu>
    );
};


