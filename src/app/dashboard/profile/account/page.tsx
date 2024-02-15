"use client";
import Profile from "@/components/dashboard/dashboard_pages/Profile";
import { useLoggedUserQuery, useUserByIdQuery } from "@/redux/api/userApi";



export default function page() {
  const { data } = useLoggedUserQuery(undefined)
  console.log({data});
  return (
    <>
      <Profile profileData={data?.data} />
    </>
  )
}
