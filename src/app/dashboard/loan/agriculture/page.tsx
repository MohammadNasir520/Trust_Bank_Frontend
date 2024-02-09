'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/UI/table";
import EmptyTable from "@/components/dashboard/dashboard_ui/EmptyTable";
import { useAgricultureLoanQuery, useUpdateAgricultureLoanMutation } from "@/redux/api/agricultureLoanApi";
import toast from "react-hot-toast";

export default function AgricultureLoan() {

    const { data, isLoading } = useAgricultureLoanQuery(undefined);
    const [updateLoan] = useUpdateAgricultureLoanMutation()
    const loans = data?.data;

    const handleUpdateLoan = async (id: string, status: string) => {
        try {
            const data = { status }
            console.log(data, id)
            const res = await updateLoan({ id, data }).unwrap();
            console.log({ res })
            if (res?.success) {
                toast(`Loan ${status} successfully `, {
                    icon: <span style={{ color: "white" }}>✔</span>,
                    style: {
                        borderRadius: "10px",
                        background: "#012169",
                        color: "#fff",
                    },
                    duration: 2000,
                });
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1 className="text-xl font-semibold  text-gray-700 mb-2">All Agriculture Loans</h1>
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
                                        <button onClick={() => handleUpdateLoan(loan?.id, 'accepted')} className="px-2  rounded bg-blue-100 text-blue-500 ">Accept </button>
                                        <button onClick={() => handleUpdateLoan(loan?.id, 'rejected')} className="px-2  rounded bg-red-100 text-red-500 ">Reject</button>
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

