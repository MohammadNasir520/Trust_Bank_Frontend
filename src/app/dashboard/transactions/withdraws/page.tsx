'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/UI/table"
import { useGetAllWithdrawQuery } from "@/redux/api/transactionApi";
import { formatDate, formatTime } from "@/utils/formatDate";
import { IoMdPrint } from "react-icons/io";

export default function Withdraws() {
    const { data } = useGetAllWithdrawQuery(undefined);
    const withdraws = data?.data || [];

    return (
        <div>
            <h1 className="text-xl font-semibold  text-gray-700 mb-2">All Withdraws</h1>
            <Table className="bg-white rounded w-full">

                <TableHeader>
                    <TableRow>
                        <TableHead className=""> Account</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Created at</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                        withdraws?.map((deposit: any) => <TableRow key={deposit?.id}>
                            <TableCell className="font-medium">
                                <div className="text-gray-700 mt-2">
                                    <p className="capitalize"> {deposit?.user?.name}</p>
                                    {/* <p className="text-sm"> {deposit?.user?.id}</p> */}
                                </div>
                            </TableCell>
                            <TableCell>{deposit?.user?.email}</TableCell>
                            <TableCell>{deposit?.amount} {deposit?.currency}</TableCell>
                            <TableCell className='capitalize'>{deposit?.type}</TableCell>
                            <TableCell className="text-start">
                                <div className="text-sm">
                                    <p> {formatDate(deposit?.createdAt)} </p>
                                    <p> At {formatTime(deposit?.createdAt)} </p>
                                </div>

                            </TableCell>

                            <TableCell className="text-start flex gap-2 mt-2">
                                <button className="bg-blue-100 px-2  rounded text-blue-500">Profile </button>
                                <IoMdPrint />

                            </TableCell>
                        </TableRow>
                        )
                    }
                </TableBody>
            </Table>
            {/* {!isLoading && !accounts?.length && <EmptyTable />} */}
        </div>
    )
}
