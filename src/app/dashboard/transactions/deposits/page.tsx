'use client'

import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/UI/table";
import ViewTransactionModal from "@/components/dashboard/dashboard_modal/ViewTransactionModal";
import { useGetAllDepositQuery } from "@/redux/api/transactionApi";
import { formatDate, formatTime } from "@/utils/formatDate";
import { Table, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { IoMdPrint } from "react-icons/io";
import { LuView } from "react-icons/lu";

// const datas: any = [
//     {
//         id: '0207101014680',
//         accountType: 'Student',
//         name: 'Abu Sani Faysal',
//         email: 'abu.faysal002@gmail.com',
//         contactNo: '01634319696',
//         amount: 250,
//         createdAt: '12 June, 2024',
//         status: 'Success'

//     },
//     {
//         id: '0207101014681',
//         accountType: 'Marchent',
//         name: 'Kalam Hosen',
//         email: 'abu.faysal002@gmail.com',
//         contactNo: '01634319696',
//         amount: 250,
//         createdAt: '12 June, 2024',
//         status: 'Success'

//     },
//     {
//         id: '0207101014642',
//         accountType: 'Student',
//         name: 'Rabbil Karim',
//         email: 'abu.rabbil@gmail.com',
//         contactNo: '01634319696',
//         amount: 250,
//         createdAt: '12 June, 2024',
//         status: 'Success'

//     },
// ]
export default function Deposits() {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { data } = useGetAllDepositQuery(undefined);
    const deposits = data?.data || [];

    return (
        <div>
            <h1 className="text-xl font-semibold  text-gray-700 mb-2">All Deposit</h1>
            <Table className="bg-white rounded w-full text-md">

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
                        deposits?.map((deposit: any) => <TableRow key={deposit?.id}>
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

                            <TableCell className="text-start flex items-center gap-2 mt-2">
                                <button className="bg-gray-200 px-2  rounded py-1 text-gray-700"><LuView />
                                </button>
                                <button className="px-2  rounded bg-gray-200 py-1">  <IoMdPrint className="text-lg text-gray-700" /></button>
                            </TableCell>
                        </TableRow>
                        )
                    }
                    <div className="">
                        <ViewTransactionModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
                    </div>
                </TableBody>
            </Table>
            {/* {!isLoading && !accounts?.length && <EmptyTable />} */}

        </div>
    )
}
