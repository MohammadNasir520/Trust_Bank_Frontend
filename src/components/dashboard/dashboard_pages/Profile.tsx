import { formatDate } from "@/utils/formatDate";
import {
<<<<<<< HEAD
  CircularProgress,
  CircularProgressLabel,
  Text,
=======
    CircularProgress,
    CircularProgressLabel,
    Text,
>>>>>>> b66cac96359b9ed401caff81e224a6cdb6216b83
} from "@chakra-ui/react";
import Image from "next/image";
import { TiTickOutline } from "react-icons/ti";

interface IAccount {
<<<<<<< HEAD
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
}

interface IProfileData {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  accounts: IAccount[];
}

export default function Profile({
  profileData,
}: {
  profileData: IProfileData;
}) {
  return (
    <div className="w-full">
      <div className="bg-[#012169] rounded-t py-6 px-4 flex items-center gap-6">
        <div>
          <Image
            src="/assets/managers/ah-likhon.jpg"
            // @ts-ignore
            alt={profileData?.name}
            width={100}
            height={100}
            className="w-full h-full border-0 object-cover rounded-full"
          />
        </div>

        <div className="text-white">
          <h3 className="text-xl capitalize relative font-bold leading-6">
            {profileData?.name}
          </h3>
          <p className="text-sm">{profileData?.email}</p>
          <p className="text-sm w-fit ">
            {profileData?.accounts[0]?.contactNo}
          </p>
        </div>
      </div>
      <div className="bg-white md:mx-auto rounded-b w-full overflow-hidden py-6 px-4 grid grid-cols-1 gap-y-2">
        <div>
          <h1 className="w-fit py-1 text-lg lg:text-xl font-bold leading-2 text-[#012169] border border-t-0 border-l-0 border-r-0 border-b-2 border-b-[#012169]">
            Personal Information
          </h1>
          <div className="grid grid-cols-4 gap-y-1 my-2">
            <span className="col-span-4 md:col-span-2 text-base font-medium">
              Profession:{" "}
              <span className="font-normal">
                {profileData?.accounts[0]?.profession}
              </span>
            </span>

            <span className="col-span-4 md:col-span-2 text-base font-medium">
              Citizen:{" "}
              <span className="font-normal">
                {profileData?.accounts[0]?.citizenShip}
              </span>
            </span>
            <span className="col-span-4 md:col-span-2 text-base font-medium">
              Age:{" "}
              <span className="font-normal">
                {profileData?.accounts[0]?.age}
              </span>
            </span>
            <span className="col-span-4 md:col-span-2 text-base font-medium">
              Education:{" "}
              <span className="font-normal">
                {" "}
                {profileData?.accounts[0]?.education}
              </span>
            </span>
          </div>
        </div>

        <div>
          <h1 className="w-fit py-1 text-lg lg:text-xl font-bold leading-2 text-[#012169] border border-t-0 border-l-0 border-r-0 border-b-2 border-b-[#012169]">
            Account Details
          </h1>
          <div className="grid grid-cols-4 gap-y-1 my-2">
            <span className="col-span-4 md:col-span-2 text-base font-medium">
              Account No:{" "}
              <span className="font-normal">
                {profileData?.accounts[0]?.accountId}
              </span>
            </span>

            <span className="col-span-4 md:col-span-2 text-base font-medium">
              Account Type:{" "}
              <span className="font-normal">
                {profileData?.accounts[0]?.accountType}
              </span>
            </span>
            <span className="col-span-4 md:col-span-2 text-base font-medium">
              Open Bank Account Date:{" "}
              <span className="font-normal">
                {formatDate(profileData?.accounts[0]?.createdAt)}
              </span>
            </span>
          </div>
        </div>

        <div className="">
          {/* <div>
            <h4 className="text-md font-semibold leading-3 text-[#6C22A6]">
              Balance Calculation
            </h4>
            <label>Currency</label>
            <select id="currency">
              <option value="CA">BDT</option>
              <option value="FR">USD</option>
            </select>
          </div> */}

          <div className="flex items-center justify-center px-4 py-4 profile-circle">
            <CircularProgress>
              <CircularProgressLabel>
                <Text className="text-md md:text-[15px] text-center font-bold hidden md:block">
                  Current Balance
                </Text>
                <Text className="text-md md:text-[15px] text-center font-bold block md:hidden">
                  C/B
                </Text>
                <Text className="text-base md:text-lg lg:text-xl text-center font-bold">
                  {profileData?.accounts[0]?.balance || 0}
                </Text>
              </CircularProgressLabel>
            </CircularProgress>

            <CircularProgress>
              <CircularProgressLabel>
                <Text className="text-md md:text-[15px] text-center font-bold hidden md:block">
                  Transfer Balance
                </Text>
                <Text className="text-md md:text-[15px] text-center font-bold block md:hidden">
                  T/A
                </Text>
                <Text className="text-base md:text-lg lg:text-xl text-center font-bold">
                  {profileData?.accounts[0]?.balance || 0}
                </Text>
              </CircularProgressLabel>
            </CircularProgress>

            <CircularProgress>
              <CircularProgressLabel>
                <Text className="text-md md:text-[15px] text-center font-bold hidden md:block">
                  Total Withdraw
                </Text>
                <Text className="text-md md:text-[15px] text-center font-bold block md:hidden">
                  T/W
                </Text>
                <Text className="text-base md:text-lg lg:text-xl text-center font-bold">
                  {profileData?.accounts[0]?.balance || 0}
                </Text>
              </CircularProgressLabel>
            </CircularProgress>
          </div>

          {/* <div className="grid grid-cols-6 gap-3  ">
=======
    id: string;
    accountId: string;
    userBalances: any[];
    contactNo: string;
    profession: string;
    age: number;
    education: string;
    profileImage: string;
    accountType: string;
    citizenShip: string;
    userId: string;
    createdAt: string;
}

interface IProfileData {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
    accounts: IAccount[];
}

export default function Profile({
    profileData,
}: {
    profileData: IProfileData;
}) {
    return (
        <div className="w-full">
            <div className="bg-[#012169] rounded-t py-6 px-4 flex items-center gap-6">
                <div>
                    <Image
                        src="/assets/managers/ah-likhon.jpg"
                        // @ts-ignore
                        alt={profileData?.name}
                        width={100}
                        height={100}
                        className="w-full h-full border-0 object-cover rounded-full"
                    />
                </div>

                <div className="text-white">
                    <h3 className="text-xl capitalize relative font-bold leading-6">
                        {profileData?.name}
                    </h3>
                    <p className="text-sm">{profileData?.email}</p>
                    <p className="text-sm w-fit ">
                        {profileData?.accounts[0]?.contactNo}
                    </p>
                </div>
            </div>
            <div className="bg-white md:mx-auto rounded-b w-full overflow-hidden py-6 px-4 grid grid-cols-1 gap-y-2">
                <div>
                    <h1 className="w-fit py-1 text-lg lg:text-xl font-bold leading-2 text-[#012169] border border-t-0 border-l-0 border-r-0 border-b-2 border-b-[#012169]">
                        Personal Information
                    </h1>
                    <div className="grid grid-cols-4 gap-y-1 my-2">
                        <span className="col-span-4 md:col-span-2 text-base font-medium">
                            Profession:{" "}
                            <span className="font-normal">
                                {profileData?.accounts[0]?.profession}
                            </span>
                        </span>

                        <span className="col-span-4 md:col-span-2 text-base font-medium">
                            Citizen:{" "}
                            <span className="font-normal">
                                {profileData?.accounts[0]?.citizenShip}
                            </span>
                        </span>
                        <span className="col-span-4 md:col-span-2 text-base font-medium">
                            Age:{" "}
                            <span className="font-normal">
                                {profileData?.accounts[0]?.age}
                            </span>
                        </span>
                        <span className="col-span-4 md:col-span-2 text-base font-medium">
                            Education:{" "}
                            <span className="font-normal">
                                {" "}
                                {profileData?.accounts[0]?.education}
                            </span>
                        </span>
                    </div>
                </div>

                <div>
                    <h1 className="w-fit py-1 text-lg lg:text-xl font-bold leading-2 text-[#012169] border border-t-0 border-l-0 border-r-0 border-b-2 border-b-[#012169]">
                        Account Details
                    </h1>
                    <div className="grid grid-cols-4 gap-y-1 my-2">
                        <span className="col-span-4 md:col-span-2 text-base font-medium">
                            Account No:{" "}
                            <span className="font-normal">
                                {profileData?.accounts[0]?.accountId}
                            </span>
                        </span>

                        <span className="col-span-4 md:col-span-2 text-base font-medium">
                            Account Type:{" "}
                            <span className="font-normal">
                                {profileData?.accounts[0]?.accountType}
                            </span>
                        </span>
                        <span className="col-span-4 md:col-span-2 text-base font-medium">
                            Open Bank Account Date:{" "}
                            <span className="font-normal">
                                {formatDate(profileData?.accounts[0]?.createdAt)}
                            </span>
                        </span>
                    </div>
                </div>

                <div className="">
                    {/* <div>
            <h4 className="text-md font-semibold leading-3 text-[#6C22A6]">
              Balance Calculation
            </h4>
            <label>Currency</label>
            <select id="currency">
              <option value="CA">BDT</option>
              <option value="FR">USD</option>
            </select>
          </div> */}

                    <div className="flex items-center justify-around px-4 py-4 gap-2  profile-circle">
                        {
                            profileData?.accounts[0]?.userBalances?.map((userBalance: any) => <div className=" bg-blue-50 text-blue-700 w-full py-4 rounded-lg">
                                {/* <CircularProgressLabel> */}
                                <Text className="text-md md:text-[15px] text-center font-bold hidden md:block">
                                    {userBalance?.currency}
                                </Text>

                                <Text className="text-base md:text-lg lg:text-sm text-center font-bold">
                                    {/* {profileData?.accounts[0]?.balance || 0} */}
                                    {Number(userBalance?.balance)?.toFixed(2)}
                                </Text>
                                {/* </CircularProgressLabel> */}
                            </div>)
                        }

                        {/* <CircularProgress>
                            <CircularProgressLabel>
                                <Text className="text-md md:text-[15px] text-center font-bold hidden md:block">
                                    Transfer Balance
                                </Text>
                                <Text className="text-md md:text-[15px] text-center font-bold block md:hidden">
                                    T/A
                                </Text>
                                <Text className="text-base md:text-lg lg:text-xl text-center font-bold">
                                    {profileData?.accounts[0]?.balance || 0}
                                </Text>
                            </CircularProgressLabel>
                        </CircularProgress>

                        <CircularProgress>
                            <CircularProgressLabel>
                                <Text className="text-md md:text-[15px] text-center font-bold hidden md:block">
                                    Total Withdraw
                                </Text>
                                <Text className="text-md md:text-[15px] text-center font-bold block md:hidden">
                                    T/W
                                </Text>
                                <Text className="text-base md:text-lg lg:text-xl text-center font-bold">
                                    {profileData?.accounts[0]?.balance || 0}
                                </Text>
                            </CircularProgressLabel>
                        </CircularProgress> */}
                    </div>

                    {/* <div className="grid grid-cols-6 gap-3  ">
>>>>>>> b66cac96359b9ed401caff81e224a6cdb6216b83
            <div className="col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center bg-white rounded border w-full py-4 ">
              <div className="py-2"></div>
              <div className="leading-3">
                <p className=" text-md font-bold text-slate-700">
                  Current Balance
                </p>
              </div>
              <div>
                <p className="text-xl text-center text-slate-500 font-serif font-semibold  self-start ml-auto">
                  {profileData?.accounts[0]?.balance}
                </p>
              </div>
<<<<<<< HEAD
=======
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center bg-white rounded border w-full py-4 ">
              <div className="py-2"></div>
              <div className="leading-3">
                <p className=" text-md font-bold text-slate-700">
                  Transfer-Balance
                </p>
              </div>
              <div>
                <p className="text-xl text-center text-slate-500 font-serif font-semibold  self-start ml-auto">
                  {profileData?.accounts[0]?.balance}
                </p>
              </div>
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-2 flex flex-col justify-center items-center bg-white rounded border w-full py-4 ">
              <div className="py-2"></div>
              <div className="leading-3">
                <p className=" text-md font-bold text-slate-700">
                  Total Withdraw Money
                </p>
              </div>
              <div>
                <p className="text-xl text-center text-slate-500 font-serif font-semibold  self-start ml-auto"></p>
              </div>
            </div>
          </div> */}
                </div>
>>>>>>> b66cac96359b9ed401caff81e224a6cdb6216b83
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center bg-white rounded border w-full py-4 ">
              <div className="py-2"></div>
              <div className="leading-3">
                <p className=" text-md font-bold text-slate-700">
                  Transfer-Balance
                </p>
              </div>
              <div>
                <p className="text-xl text-center text-slate-500 font-serif font-semibold  self-start ml-auto">
                  {profileData?.accounts[0]?.balance}
                </p>
              </div>
            </div>
<<<<<<< HEAD
            <div className="col-span-6 md:col-span-6 lg:col-span-2 flex flex-col justify-center items-center bg-white rounded border w-full py-4 ">
              <div className="py-2"></div>
              <div className="leading-3">
                <p className=" text-md font-bold text-slate-700">
                  Total Withdraw Money
                </p>
              </div>
              <div>
                <p className="text-xl text-center text-slate-500 font-serif font-semibold  self-start ml-auto"></p>
              </div>
            </div>
          </div> */}
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
    </div>
  );
}
=======
        </div>
    );
}
>>>>>>> b66cac96359b9ed401caff81e224a6cdb6216b83
