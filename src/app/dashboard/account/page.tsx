"use client";

import { useGetAllAccountsQuery } from "@/redux/api/accountApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/table";
import { useRouter } from "next/navigation";

export default function Account() {
  const router = useRouter();
  const { data, isLoading } = useGetAllAccountsQuery(undefined);
  const accounts = data?.data;

  return (
    <div>
      <h1 className="text-xl font-semibold  text-gray-700 mb-2">
        All Accounts
      </h1>
      <Table className="bg-white rounded">
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
          {accounts?.map((account: any) => (
            <TableRow key={account?.id}>
              <TableCell className="font-medium">
                {account?.user?.name}
              </TableCell>
              <TableCell>{account?.accountType}</TableCell>
              <TableCell>{account?.contactNo}</TableCell>
              <TableCell className="text-start">
                {account?.user?.email}
              </TableCell>
              <TableCell className="text-start">
                {account?.citizenShip}
              </TableCell>
              <TableCell className="text-start">
                {account?.balance ? account?.balance : 0}
              </TableCell>
              <TableCell className="text-start flex gap-2">
                <button
                  onClick={() =>
                    router.push(`/dashboard/account/${account?.user?.id}`)
                  }
                  className="bg-blue-100 px-2  rounded text-blue-500"
                >
                  Details{" "}
                </button>
                <button className="bg-orange-100 px-2  rounded text-orange-500">
                  Statement{" "}
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* {!isLoading && !accounts?.length && <EmptyTable />} */}
    </div>
  );
}
