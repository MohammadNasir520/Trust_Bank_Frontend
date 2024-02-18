'use client'

import React from "react";

import jsPDF from "jspdf";
import { FaDownload } from "react-icons/fa6";

// Sample transaction data
const transactionsData = [
    { id: 1, time: "2024-02-14 10:00:00", name: "John Doe", amount: 100 },
    { id: 1, time: "2024-02-14 10:00:00", name: "John Doe", amount: 100 },
    { id: 1, time: "2024-02-14 10:00:00", name: "John Doe", amount: 100 },
    { id: 1, time: "2024-02-14 10:00:00", name: "John Doe", amount: 100 },

];

const TransactionItem = ({ transaction }: any) => (
    <div className="flex flex-col justify-between gap-3 items-center bg-[#E6E6E6] p-6">
        <p className="text-[#012169]"> <span>Name : </span>{transaction.name}</p>
        <p className="text-[#012169]"> <span>Time : </span>{transaction.time}</p>
        <p className="italic text-[#012169]"> <span>Amount : </span>{transaction.amount}</p>
    </div>
);

// Component to render all transactions
const Transactions = () => {
    const handleDownloadPdf = () => {
        // Create new jsPDF instance
        const doc = new jsPDF();

        // Initialize y position
        let y = 20;

        // Add content to PDF
        transactionsData.forEach((transaction, index) => {
            const transactionText = `
        Transaction ${index + 1}
        Time: ${transaction.time}
        Name: ${transaction.name}
        Amount: ${transaction.amount}
      `;

            // Add transaction details as a block of text
            doc.text(transactionText, 10, y);

            // Move to the next position
            y += 40; // Adjust this value as needed for spacing between transactions
        });

        // Save PDF
        doc.save("bank_transactions.pdf");
    };

    return (
        <div>
            <h1>Bank Transactions</h1>
            <div>
                {transactionsData.map((transaction) => (
                    <TransactionItem key={transaction.id} transaction={transaction} />
                ))}
            </div>
            <div className="flex justify-center my-2">
                <button
                    className="flex items-center gap-2  text-black border px-4 py-2 "
                    onClick={handleDownloadPdf}
                >
                    <span>
                        <FaDownload />
                    </span>{" "}
                    <span>Download PDF</span>
                </button>
            </div>
        </div>
    );
};

export default Transactions;