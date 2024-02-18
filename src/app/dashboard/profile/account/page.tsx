"use client";
import Profile from "@/components/dashboard/dashboard_pages/Profile";
import { authKey } from "@/constants/storageKey";
import { useLoggedUserQuery, useUserByIdQuery } from "@/redux/api/userApi";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage } from "@/utils/local-storage";

export default function page() {

  const { data }: any = useLoggedUserQuery(undefined);
  return (
    <>
      <Profile profileData={data?.data} />
    </>
  );
}
