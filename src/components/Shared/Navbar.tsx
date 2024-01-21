import Image from "next/image";
import Link from "next/link";
import { BiNotification } from "react-icons/bi";
import { FaSearch, FaWhatsapp } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Navbar() {
    return (
        <div className="sticky top-0 z-[99] h-[105px] 	bg-white  ">
            <div className=" ">
                <div className="grid grid-cols-8 overflow-hidden ">
                    <div className="bg-[#1F305E] py-3 col-span-2  pl-20  rounded-br-2xl ml-[-30px]" style={{ transform: 'skew(-30deg)' }}>
                        <Image src={'/logo-no-background.png'} height={170} width={200} alt="logo" className=" " style={{ transform: 'skew(30deg)' }} />
                    </div>
                    <div className=" col-span-6 h-full  ">
                        <div className="flex flex-col justify-between w-full      ">
                            <div className="bg-[#1F305E] text-white py-2 flex justify-between h-1/2  w-full pr-16">
                                <div className="flex gap-5 ml-6">
                                    <p>Dashboard</p>
                                    <span>About</span>

                                </div>

                                <div className="flex justify-end gap-4 text-xl">
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
                            </div>
                            <div className="flex justify-between my-auto p-5 text-black h-1/2  w-full  ">
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
                        </div>

                    </div>
                </div>


            </div>



        </div>
    )
}
