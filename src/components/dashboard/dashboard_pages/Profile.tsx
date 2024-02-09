import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import { TiTickOutline } from "react-icons/ti";

interface IAccount {
    id: string;
    accountId: string;
    balance: number;
    contactNo: string;
    profession: string;
    age: number;
    education: string;
    profileImage: string;
    accountType: string;
    citizenShip: string;
    userId: string;
    createdAt: string;
    userBalances: any[]
}

interface IProfileData {

    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
    accounts: IAccount[];

}

export default function Profile({ profileData }: { profileData: IProfileData }) {

    return (
        <div className="w-full">
            <div className="bg-white md:mx-auto rounded  w-full  overflow-hidden">
                <div className="h-[140px] bg-[#012169]" />
                <div className="px-5 py-2 flex flex-col gap-3 pb-6">
                    <div className="grid grid-cols-6 -mt-24 ">
                        <Image
                            src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                            // @ts-ignore
                            alt={profileData?.name}
                            width={90}
                            height={90}
                            className="h-50 w-60 object-center  object-cover col-span-6 lg:col-span-3 rounded-sm"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl capitalize text-slate-900 relative font-bold leading-6">
                            {profileData?.name}
                        </h3>
                        <p className="text-sm text-gray-700">{profileData?.email}</p>
                        <p className="text-sm text-gray-700   w-fit ">{profileData?.accounts[0]?.contactNo}</p>
                    </div>
                    <h1 className="text-[16px] font-semibold leading-3 text-[#6C22A6]">
                        Details
                    </h1>
                    <div className="grid grid-cols-4 ">
                        <span className="col-span-4 md:col-span-2 rounded-sm  text-sm font-medium  ">
                            Profession:{" "}
                            <span className="font-semibold">
                                {profileData?.accounts[0]?.profession}
                            </span>
                        </span>

                        <span className="col-span-4 md:col-span-2 rounded-sm     text-sm font-medium  ">
                            Citizen:{" "}
                            <span className="font-semibold">
                                {profileData?.accounts[0]?.citizenShip}
                            </span>
                        </span>
                        <span className="col-span-4 md:col-span-2 rounded-sm    text-sm font-medium  ">
                            Age:{" "}
                            <span className="font-semibold">

                                {profileData?.accounts[0]?.age}
                            </span>
                        </span>
                        <span className="col-span-4 md:col-span-2 rounded-sm    text-sm font-medium  ">
                            Education:{" "}
                            <span className="font-semibold">          {profileData?.accounts[0]?.education}</span>
                        </span>
                    </div>

                    <div className="flex flex-col gap-2 text-sm ">
                        <h1 className="text-[16px] font-semibold leading-3 text-[#6C22A6]">
                            Account Details
                        </h1>
                        <h1>
                            Account No :{" "}
                            <span className="font-semibold">
                                {profileData?.accounts[0]?.accountId}
                            </span>
                        </h1>
                        <h1>
                            Account Type :{" "}
                            <span className="font-semibold">
                                {profileData?.accounts[0]?.accountType}
                            </span>
                        </h1>
                        <h1>
                            Open Bank Account Date :{" "}
                            <span className="font-semibold">
                                {formatDate(profileData?.accounts[0]?.createdAt)}
                            </span>
                        </h1>
                    </div>

                    <div>
                        <h4 className="text-md font-semibold leading-3 text-[#6C22A6]">
                            Balance in Currencies
                        </h4>

                    </div>
                    <div className=" text-gray-700 grid lg:grid-cols-9  md:grid-cols-6 grid-cols-3 gap-3 ">

                        {profileData?.accounts[0]?.userBalances?.map((balance: any) =>
                            <div className="flex flex-col justify-center items-center bg-gray-50 rounded border w-full py-4 ">
                                <p className="text-center   font-semibold   ">
                                    {balance?.currency}
                                </p>
                                <p className=" text-md font-bold">
                                    {Number(balance?.balance)?.toFixed(2)}
                                </p>


                            </div>)}
                    </div>
                </div>
            </div>
            <div className="mt-5 ml-4">
                <h4 className="text-md font-medium leading-3 bg-[#F8F8F8] my-2">
                    Ethics and Rules
                </h4>
                <ul className="ml-2 mt-2">
                    <li className="flex items-center gap-1 text-[14px] lg:text-[14px]">
                        <TiTickOutline />
                        Bank respects customer privacy, handling information confidentially.
                    </li>
                    <li className="flex items-center gap-1 text-[14px] lg:text-[14px]">
                        <TiTickOutline />
                        Users expected to comply with applicable laws and regulations.
                    </li>
                    <li className="flex items-center gap-1 text-[14px] lg:text-[14px]">
                        <TiTickOutline />
                        Vigilance against phishing and scams.{" "}
                    </li>
                </ul>
            </div>
        </div >
    );
}
