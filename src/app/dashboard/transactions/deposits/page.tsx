import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/UI/table";
import { Table } from "@chakra-ui/react";
const data: any = [
    {
        id: '0207101014680',
        accountType: 'Student',
        name: 'Abu Sani Faysal',
        email: 'abu.faysal002@gmail.com',
        contactNo: '01634319696',
        amount: 250,
        createdAt: '12 June, 2024',
        status: 'Success'

    },
    {
        id: '0207101014681',
        accountType: 'Marchent',
        name: 'Kalam Hosen',
        email: 'abu.faysal002@gmail.com',
        contactNo: '01634319696',
        amount: 250,
        createdAt: '12 June, 2024',
        status: 'Success'

    },
    {
        id: '0207101014642',
        accountType: 'Student',
        name: 'Rabbil Karim',
        email: 'abu.rabbil@gmail.com',
        contactNo: '01634319696',
        amount: 250,
        createdAt: '12 June, 2024',
        status: 'Success'

    },
]
export default function Deposits() {
    return (
        <div>
            <h1 className="text-xl font-semibold  text-gray-700 mb-2">All Deposit</h1>
            <Table className="bg-white rounded w-full">

                <TableHeader>
                    <TableRow>
                        <TableHead className=""> Account</TableHead>
                        <TableHead className=""> Account Type</TableHead>
                        <TableHead>Contact No</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Created at</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                        data?.map((account: any) => <TableRow key={account?.id}>
                            <TableCell className="font-medium">
                                <div className="text-gray-700 mt-2">
                                    <p> {account?.name}</p>
                                    <p className="text-sm"> {account?.id}</p>
                                </div>
                            </TableCell>
                            <TableCell>{account?.accountType}</TableCell>
                            <TableCell>{account?.contactNo}</TableCell>
                            <TableCell className="text-start text-top">
                                {account?.amount}
                            </TableCell>
                            <TableCell className="text-start">
                                <div className="text-sm">
                                    <p> {account?.createdAt} </p>
                                    <p> At 12.30PM </p>
                                </div>

                            </TableCell>
                            <TableCell className="text-start"><div>
                                {account?.status}</div></TableCell>
                            <TableCell className="text-start flex gap-2 mt-2">
                                <button className="bg-blue-100 px-2  rounded text-blue-500">Profile </button>
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
