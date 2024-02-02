import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import NavMenu from "./NavMenu"
import { loanNavMenuOptions } from "@/constants/navData"


export default function ResponsiveNavMenu({ isOpen, onClose }: any) {


    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                //@ts-ignore

                className='relative'
            >
                <DrawerOverlay />
                <DrawerContent className=" p-5 bg-white  mt-16">
                    <div className="flex justify-between border-b pb-1 ">
                        <p className="font-bold">Navbar</p>
                        <DrawerCloseButton />
                    </div>

                    <DrawerBody className="z-[99999]">
                        <div className="flex flex-col gap-4 justify-start items-start text-black mt-4 ">
                            <NavMenu items={loanNavMenuOptions} title="Loan" />
                            <NavMenu items={loanNavMenuOptions} title="Investment" />
                            <NavMenu items={loanNavMenuOptions} title="Insurance" />
                            <NavMenu items={loanNavMenuOptions} title="Card" />
                            <NavMenu items={loanNavMenuOptions} title="Deposit" />
                            <NavMenu items={loanNavMenuOptions} title="NRI services" />
                        </div>
                    </DrawerBody>


                </DrawerContent>
            </Drawer>

        </>
    )
}