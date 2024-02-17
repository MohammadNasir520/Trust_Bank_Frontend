'use client'

import LoanSchemeCard from "@/components/dashboard/dashboard_ui/LoanSchemeCard"
import { useGetLoanSchemeByCategoryQuery } from "@/redux/api/loanSchemeApi"
import Link from "next/link"

export default function PersonalLoanScheme() {
    const { data } = useGetLoanSchemeByCategoryQuery('personal')
    return (
        <div className="m-4">
            <div className="flex justify-between items-center my-5">
                <h1 className="text-xl font-semibold  text-gray-700 mb-2">All Personal Loan Schemes</h1>
                <Link href={'/dashboard/schemeLoans/add_scheme/personal'} className="bg-blue-500 text-white px-3 py-2 rounded">Add Scheme</Link>
            </div>
            <div className="grid grid-cols-3 gap-3">
                {data?.data?.map((scheme: any) => <LoanSchemeCard key={scheme?.id} scheme={scheme} />)}
            </div>
        </div>
    )
}
