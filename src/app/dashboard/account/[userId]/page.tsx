'use client'

import Profile from "@/components/dashboard/dashboard_pages/Profile";
import { useUserByIdQuery } from "@/redux/api/userApi"
import { useParams } from "next/navigation"

export default function page() {
    const { userId } = useParams()
    const { data } = useUserByIdQuery(userId);

    return (
        <><Profile profileData={data?.data} /></>
    )
}
