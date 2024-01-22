//@ts-nocheck

import { MenuItem } from "@chakra-ui/menu";
import { Button } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

export default function MenuItems({ children, closeSubMenu }) {
    const refMenuItem = useRef({ current: null });

    useEffect(() => {
        if (refMenuItem.current && closeSubMenu) {
            refMenuItem.current.addEventListener("mouseenter", closeSubMenu);
        }

        return () => {
            if (refMenuItem.current && closeSubMenu) {
                refMenuItem.current.removeEventListener("mouseenter", closeSubMenu);
            }
        };
    }, [closeSubMenu]);

    return (
        <MenuItem
            ref={refMenuItem}
            className="hover:text-[#012169] px-2 py-1 rounded  hover:bg-slate-100 border-white duration-200 "
        >
            {children}
        </MenuItem>
    );
};

;
