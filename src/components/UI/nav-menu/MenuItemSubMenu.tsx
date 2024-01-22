//@ts-nocheck

import { MenuItem } from "@chakra-ui/menu";

export default function MenuItemSubMenu({ children }) {
    return (
        <MenuItem
        // boxShadow="0px 2px 0px 0px transparent"
        // as="div"
        // p={0}
        // className="w-[300px]"

        >
            {children}
        </MenuItem>
    );
};


