//@ts-nocheck

import { MenuItem } from "@chakra-ui/menu";
export default function MenuItems({ children }) {

    return (
        <MenuItem

            className="hover:text-[#012169] px-2 py-1 rounded  hover:bg-slate-100 border-white duration-200 "
        >
            {children}
        </MenuItem>
    );
};

;
