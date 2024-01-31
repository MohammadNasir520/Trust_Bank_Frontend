import LoanCalculator from '@/components/UI/LoanCalculator';
import React from 'react'

const LoanCalculatorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-center my-2">Loan Calculator</h1>
      <h1 className="text-center mb-4 text-md md:text-lg lg:text-2xl">
        <span> Are you looking for loan?</span> 
        <span> Use our Loan Calculator</span>
      </h1>
      <LoanCalculator />
    </div>
  );
}

export default LoanCalculatorPage