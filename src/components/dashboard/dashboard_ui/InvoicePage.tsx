import React from 'react';

const InvoicePage = () => {
    const data = {
        amount: '$100.00',
        createdAt: '2024-02-09',
        currency: 'USD',
        id: '123456',
        type: 'deposit',
        user: {
            email: 'user@example.com',
            name: 'John Doe',
            role: 'Customer',
        },
    };

    return (
        <div className="bg-blue-200 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-md shadow-md">
                <h1 className="text-2xl font-bold mb-4">Trust Bank Invoice</h1>
                <div className="mb-4">
                    <p>
                        <span className="font-bold">Amount:</span> {data.amount}
                    </p>
                    <p>
                        <span className="font-bold">Created At:</span> {data.createdAt}
                    </p>
                    <p>
                        <span className="font-bold">Currency:</span> {data.currency}
                    </p>
                    <p>
                        <span className="font-bold">ID:</span> {data.id}
                    </p>
                    <p>
                        <span className="font-bold">Type:</span> {data.type}
                    </p>
                    <p>
                        <span className="font-bold">User Email:</span> {data.user.email}
                    </p>
                    <p>
                        <span className="font-bold">User Name:</span> {data.user.name}
                    </p>
                    <p>
                        <span className="font-bold">User Role:</span> {data.user.role}
                    </p>
                </div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => window.print()}
                >
                    Print
                </button>
            </div>
        </div>
    );
};

export default InvoicePage;
