import React from 'react'
import LoanCalculator from '../ui/LoanCalculator';

const LoanCalculatorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-center my-2">Loan Calculator</h1>
      <h1 className="text-center mb-4 text-3xl">
        <span> Are you looking for loan?</span> <br />
        Here we can help you calculate your .. <br /> monthly repayment
        </h1>
      <LoanCalculator />
    </div>
  );
}

export default LoanCalculatorPage