import { MenuButton } from "@chakra-ui/react";
import { Menu, MenuList } from "@chakra-ui/menu";

import { useState } from "react";
import { CloseSubMenuOverlay, InnerMenu, MenuItemSubMenu, MenuItems } from ".";

export default function NavMenu({ title, items }: { title: string, items: any[] }) {
  const [innerMenusActive, setInnerMenusActive] = useState<boolean>(true);

  const closeSubMenus = () => {
    setInnerMenusActive(false);
  };

  return (
    <>
      <Menu autoSelect={false} closeOnSelect={false} >
        <CloseSubMenuOverlay
          isActive={innerMenusActive}
          closeSubMenu={closeSubMenus}
        />
        <MenuButton _expanded={{

          color: "#012169"
        }}
          _focus={{
            fontWeight: 500,
            color: "#012169"
          }}
        >
          {title}
        </MenuButton>
        <MenuList transition="all 0.1s" zIndex={999}
          className='bg-white p-4 rounded border w-[250px]'
        >
          {items?.map((item: any) => <>

            {!item?.children && <MenuItems closeSubMenu={closeSubMenus}>{item?.label}</MenuItems>}
            {item?.children && <MenuItemSubMenu>
              <InnerMenu
                title={item?.label}
                childrenItems={item?.children}
              />
            </MenuItemSubMenu>}
          </>)}

        </MenuList>
      </Menu>
    </>
  )
}
