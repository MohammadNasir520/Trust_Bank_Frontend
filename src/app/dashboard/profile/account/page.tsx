"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TiTickOutline } from "react-icons/ti";


interface Account {
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

interface ProfileData {
  data: {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
    accounts: Account[];
  };
}


export default function page() {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const data: ProfileData = {
      data: {
        id: "7deff374-7bf9-4262-9709-9f45c4703c61",
        name: "masud",
        email: "mss@gmail.com",
        role: "client",
        createdAt: "2024-02-01T19:14:05.926Z",
        accounts: [
          {
            id: "16752978-0832-4c1c-ac72-ea202d01d9c7",
            accountId: "M-00005",
            balance: 0,
            contactNo: "+123456789012",
            profession: "Software Engineer",
            age: 25,
            education: "Master's in Computer Science",
            profileImage: "https://example.com/profile-image.jpg",
            accountType: "Marchent",
            citizenShip: "United States",
            userId: "7deff374-7bf9-4262-9709-9f45c4703c61",
            createdAt: "2024-02-01T19:18:04.658Z",
          },
        ],
      },
    };

    setProfileData(data.data);
  }, []);

  return (
    <div className="w-full">
      <div className="bg-white md:mx-auto rounded  w-full  overflow-hidden">
        <div className="h-[140px] bg-[#012169]" />
        <div className="px-5 py-2 flex flex-col gap-3 pb-6">
          <div className="grid grid-cols-6 -mt-24 ">
            <Image
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              alt={profileData.name}
              width={90}
              height={90}
              className="h-50 w-60 object-center object-cover col-span-6 lg:col-span-3 rounded-sm"
            />
          </div>
          <div>
            <h3 className="text-xl text-slate-900 relative font-bold leading-6">
              {profileData.name}
            </h3>
            <p className="text-sm text-gray-600">{profileData.email}</p>
          </div>
          <div className="grid grid-cols-4 gap-1 bg-[#FFF6E9]">
            <span className="col-span-4 md:col-span-2 rounded-sm bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              Profession:{" "}
              {profileData.accounts &&
                profileData.accounts[0] &&
                profileData.accounts[0].profession}
            </span>

            <span className="col-span-4 md:col-span-2 rounded-sm bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
               Citizen:{" "}
              {profileData.accounts &&
                profileData.accounts[0] &&
                profileData.accounts[0].citizenShip}{" "}
             
            </span>
            <span className="col-span-4 md:col-span-2 rounded-sm bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              Age:{" "}
              {profileData.accounts &&
                profileData.accounts[0] &&
                profileData.accounts[0].age}
            </span>
            <span className="col-span-4 md:col-span-2 rounded-sm bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              Education:{" "}
              {profileData.accounts &&
                profileData.accounts[0] &&
                profileData.accounts[0].education}
            </span>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <h1 className="text-[16px] font-medium leading-3 text-[#6C22A6]">
              Account Details
            </h1>
            <h1>
              Account No :{" "}
              <span className="font-semibold">
                {profileData.accounts &&
                  profileData.accounts[0] &&
                  profileData.accounts[0].accountId}
              </span>
            </h1>
            <h1>
              Account Type :{" "}
              <span className="font-semibold">
                {profileData.accounts &&
                  profileData.accounts[0] &&
                  profileData.accounts[0].accountType}
              </span>
            </h1>
            <h1>
              Open Bank Account Date :{" "}
              <span className="font-semibold">
                {profileData.accounts &&
                  profileData.accounts[0] &&
                  profileData.accounts[0].createdAt}
              </span>
            </h1>
          </div>

          <h4 className="text-md font-semibold leading-3 ">
            Balance Calculation
          </h4>
          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center bg-white rounded border w-full py-4 ">
              <div className="py-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-slate-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </div>
              <div className="leading-3">
                <p className=" text-md font-bold text-slate-700">
                  Current Balance
                </p>
              </div>
              <div>
                <p className="text-xl text-center text-slate-500 font-serif font-semibold  self-start ml-auto">
                  {profileData.accounts &&
                    profileData.accounts[0] &&
                    profileData.accounts[0].balance}
                </p>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center bg-white rounded border w-full py-4 ">
              <div className="py-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-slate-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </div>
              <div className="leading-3">
                <p className=" text-md font-bold text-slate-700">
                  Transfer-Balance
                </p>
              </div>
              <div>
                <p className="text-xl text-center text-slate-500 font-serif font-semibold  self-start ml-auto">
                  {profileData.accounts &&
                    profileData.accounts[0] &&
                    profileData.accounts[0].balance}
                </p>
              </div>
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-2 flex flex-col justify-center items-center bg-white rounded border w-full py-4 ">
              <div className="py-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-slate-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </div>
              <div className="leading-3">
                <p className=" text-md font-bold text-slate-700">
                  Total Withdraw Money
                </p>
              </div>
              <div>
                <p className="text-xl text-center text-slate-500 font-serif font-semibold  self-start ml-auto">
                  0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
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
