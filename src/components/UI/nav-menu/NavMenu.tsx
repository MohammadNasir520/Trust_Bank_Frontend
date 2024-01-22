import { MenuButton } from "@chakra-ui/react";
import { Menu, MenuList } from "@chakra-ui/menu";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import CloseSubMenuOverlay from "./CloseSubMenuOverlay";
import { useState } from "react";
import MenuItems from "./MenuItems";
import MenuItemSubMenu from "./MenuItemSubMenu";
import InnerMenu from "./InnerMenu";

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
        <MenuButton zIndex={999} >
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
