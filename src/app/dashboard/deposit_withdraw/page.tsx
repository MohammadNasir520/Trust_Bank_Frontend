"use client";

import DepositForm from "@/components/UI/DepositWithdraw/DepositForm";
import WithdrawForm from "@/components/UI/DepositWithdraw/WithdrawForm";


const BalancePage = () => {
   

    // const handleTransaction = async (data: any, transactionType: string) => {
    //     try {
    //         const amount = parseFloat(data.deposit || data.withdraw);

    //         console.log(typeof amount, data.deposit, ":transactionType");
    //         console.log(transactionType, ":transactionType");

    //         if (isNaN(amount) || amount <= 0) {
    //             toast.error("Invalid amount");
    //             return;
    //         }

    //         if (transactionType === "deposit") {
    //             setCurrentBalance((prevBalance) => prevBalance + amount);
    //         } else if (transactionType === "withdraw") {
    //             if (amount > currentBalance) {
    //                 // console.error("Insufficient balance");
    //                 toast.error("Insufficient balance");
    //                 return;
    //             }
    //             setCurrentBalance((prevBalance) => prevBalance - amount);
    //         }
    //     } catch (error) {
    //         // console.error("An unexpected error occurred:", error);
    //         toast.error("An unexpected error occurred");
    //     }
    // };

    return (
        <div className="max-w-[1200px] md:py-[80] py-5 flex mx-auto md:flex-row flex-col">
     
     <div className="basis-[45%] px-5">
            <DepositForm/>
        </div>
     
     <div className="basis-[45%] px-5">
            <WithdrawForm/>
        </div>
        </div>
       
    );
};

export default BalancePage;
