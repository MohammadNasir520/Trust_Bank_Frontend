//@ts-nocheck

import { MenuItem } from "@chakra-ui/menu";

export default function MenuItemSubMenu({ children }) {
    return (
        <MenuItem
        >
            {children}
        </MenuItem>
    );
};


