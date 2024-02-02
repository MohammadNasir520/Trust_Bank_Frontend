'use client'

import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/UI/table";
import { useGetPersonalLoanQuery } from '@/redux/api/loanApi';
import EmptyTable from '@/components/dashboard/dashboard_ui/EmptyTable';

export default function PersonalLoan() {
    const { data, isLoading } = useGetPersonalLoanQuery(undefined);
    const loans = data?.data;
    return (
        <div>
            <h1 className="text-xl font-semibold  text-gray-700 mb-2">All Personal Loans</h1>
            <Table className="bg-gray-50 rounded">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]"> Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Crop Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Land Size</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        loans?.map((loan: any) => <TableRow key={loan?.id}>
                            <TableCell className="font-medium">{loan?.user?.name}</TableCell>
                            <TableCell className="text-start">{loan?.user?.email}</TableCell>
                            <TableCell className="text-start">{loan?.cropType}</TableCell>
                            <TableCell className="text-start">{loan?.amount}</TableCell>
                            <TableCell className="text-start">{loan?.landSize}</TableCell>
                            <TableCell className="text-start capitalize ">{loan?.status}</TableCell>
                            <TableCell className="text-start">

                                {
                                    loan?.status === 'pending' ? <div className="flex gap-2">
                                        <button className="px-2  rounded bg-blue-100 text-blue-500 ">Accept </button>
                                        <button className="px-2  rounded bg-red-100 text-red-500 ">Reject</button>
                                    </div> : <>
                                        <button className="px-2  rounded text-gray-300 cursor-not-allowed">Accepted </button></>

                                }
                            </TableCell>
                        </TableRow>
                        )
                    }
                </TableBody>
            </Table>
            {!isLoading && !loans?.length && <EmptyTable />}
        </div>
    )
}
