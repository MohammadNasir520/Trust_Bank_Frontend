'use client'

import { useGetAllAccountsQuery } from "@/redux/api/accountApi"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/UI/table"
import EmptyTable from "@/components/dashboard/dashboard_ui/EmptyTable";

export default function Account() {
    const { data, isLoading } = useGetAllAccountsQuery(undefined);
    const accounts = data?.data;

    return (
        <div>
            <h1 className="text-xl font-semibold  text-gray-700 mb-2">All Accounts</h1>
            <Table>

                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]"> Name</TableHead>
                        <TableHead>Account Type</TableHead>
                        <TableHead>Contact No</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Citizenship</TableHead>
                        <TableHead>Balance</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                        accounts?.map((account: any) => <TableRow key={account?.id}>
                            <TableCell className="font-medium">{account?.user?.name}</TableCell>
                            <TableCell>{account?.accountType}</TableCell>
                            <TableCell>{account?.contactNo}</TableCell>
                            <TableCell className="text-start">{account?.user?.email}</TableCell>
                            <TableCell className="text-start">{account?.citizenShip}</TableCell>
                            <TableCell className="text-start">{account?.balance}</TableCell>
                            <TableCell className="text-start"><button className="bg-blue-100 px-2  rounded text-blue-500">View </button></TableCell>
                        </TableRow>
                        )
                    }
                </TableBody>
            </Table>
            {/* {!isLoading && !accounts?.length && <EmptyTable />} */}
        </div>
    )
}
