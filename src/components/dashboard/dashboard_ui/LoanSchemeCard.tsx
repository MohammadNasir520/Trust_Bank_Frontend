import LoanCard from "@/components/Common/LoanCard";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function LoanSchemeCard({ scheme }: any) {
    return (
        <div

            className=" flex flex-col   w-full bg-white shadow-lg border hover:shadow-xl mb-4 rounded-lg overflow-hidden"
        >
            <div className="md:w-full flex flex-col space-y-6 p-6 relative">
                <div className="flex items-center justify-center">
                    <Image
                        src={'/assets/images/regenerative.png'}
                        width={100}
                        height={100}
                        alt="avatar"
                        className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
                    />
                </div>
                <h1 className="text-lg md:text-xl font-semibold">{scheme?.title}</h1>
                <p className="text-gray-600 text-sm md:text-base">
                    {scheme?.purpose[0]}
                </p>
                <div className="flex items-center justify-between ">
                    <div className="flex items-center">
                        <span className="text-[#ffcc25] text-lg mr-1">
                            ৳
                        </span>
                        <span>{`${scheme?.amount}`}</span>
                    </div>
                    <Link href={`/loans/${'agriculture'}/${''}`}>
                        <p className="flex items-center gap-2 px-5 py-2 text-blue-600 text-semibold rounded-lg transition-all duration-300 self-end">
                            Read More <MdKeyboardDoubleArrowRight />
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
