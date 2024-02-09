"use client";
import Profile from "@/components/dashboard/dashboard_pages/Profile";
import { authKey } from "@/constants/storageKey";
import { useUserByIdQuery } from "@/redux/api/userApi";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage } from "@/utils/local-storage";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TiTickOutline } from "react-icons/ti";


export default function page() {
  const token = getFromLocalStorage(authKey) as string;
  const { userId }: any = decodedToken(token)
  const { data } = useUserByIdQuery(userId)
  return (
    <>
      <Profile profileData={data?.data} />
    </>
  )
}
