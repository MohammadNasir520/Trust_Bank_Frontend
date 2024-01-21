import Image from "next/image";
import Link from "next/link";
import { BiMenu, BiNotification } from "react-icons/bi";
import { FaSearch, FaWhatsapp } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";


export default function Navbar() {

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
        <div className="sticky top-0 z-[99] h-[105px] 	bg-white  ">
            <div className=" ">
                <div className="grid grid-cols-8 overflow-hidden ">
                    <div className="
                    bg-[#012169] py-3 lg:col-span-2 col-span-4
                    lg:pl-20 pl-10 flex items-center gap-3 rounded-br-2xl ml-[-30px]
                    p-16" style={{ transform: 'skew(-30deg)' }}>
                        <p style={{ transform: 'skew(30deg)' }} className="text-2xl lg:hidden text-white"><BiMenu /></p>
                        <Image src={'/assets/logo/logo-no-background.png'} height={170} width={200}
                            alt="logo" className="" style={{ transform: 'skew(30deg)' }} />
                    </div>
                    <div className=" lg:col-span-6 col-span-4 h-full  ">
                        <div className="flex flex-col justify-between w-full      ">
                            <div className="bg-[#012169] text-white py-2  flex justify-between h-1/2  w-full pr-16">
                                <div className="lg:flex hidden gap-5 ml-6">
                                    <p>Dashboard</p>
                                    <span>About</span>

                                </div>
                                <div className="lg:block hidden">
                                    {infoItems}

                                </div>
                            </div>
                            <div className="lg:flex hidden justify-between my-auto p-5 text-black h-1/2  w-full  ">
                                <div className="flex   gap-5">
                                    <span>Loan</span>
                                    <span>Investment</span>
                                    <span>Insurance</span>
                                    <span>Card</span>
                                    <span>Deposit</span>
                                    <span>NRI Services</span>
                                </div>
                                <div className="flex px-5 gap-5">
                                    <p>Profile</p>
                                    <p>Open An Account</p>
                                </div>
                            </div>
                            <div className="lg:hidden   flex justify-end"> {infoItems}</div>
                        </div>

                    </div>
                </div>


            </div>



        </div>
    )
}
