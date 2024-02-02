"use client";
import Form from "@/components/Forms/Form/Form";
import FormInput from "@/components/Forms/FormInput/FormInput";
import LoanCalculatorPage from "@/components/pages/home_page/LoanCalculatorPage";


const PersonalLoanApply = () => {
  const onSubmit = async (values: any) => {
    console.log(values);
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
       
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div>
          <Form submitHandler={onSubmit} className="m-10">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="loan-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Loan name
                    </label>
                    <div className="mt-2">
                      <FormInput
                        type="text"
                        name="loanName"
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                         value="personal-loan-option-2"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="amount"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                     Amount
                    </label>
                    <div className="mt-2">
                      <FormInput
                        type="text"
                        name="amount"                  
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                       value=" 50000"
                      />
                    </div>
                  </div>
                  {/* <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <FormInput                 
                        name="email"
                        type="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                       
                      />
                    </div>
                  </div> */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="purpose"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Purpose
                    </label>
                    <div className="mt-2">
                      <FormInput               
                        name="purpose"
                        type="text"    
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      
                      />
                    </div>
                  </div>
               
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="employment"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Employment
                    </label>
                    <div className="mt-2">
                      <FormInput
                        type="text"
                        name="employment"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"                   
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="income"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      income
                    </label>
                    <div className="mt-2">
                      <FormInput
                        type="number"
                        name="income"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                       
                      />
                    </div>
                  </div>


                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="guarantorName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                     Guarantor Name
                    </label>
                    <div className="mt-2">
                      <FormInput
                        type="text"
                        name="guarantorName"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor=" guarantorAddress"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                       Guarantor Address
                    </label>
                    <div className="mt-2">
                      <FormInput
                        type="text"
                        name="guarantorAddress"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor=" guarantorPhone"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                       Guarantor Phone
                    </label>
                    <div className="mt-2">
                      <FormInput
                        type="text"
                        name="guarantorPhone"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                       
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-[#012169] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </Form>
        </div>
        <div className="hidden lg:block h-1/2 w-[3px]  bg-black mx-2"> </div>
        
      </div>
      <div className=" mb-3">
        <LoanCalculatorPage />
      </div>
    </div>
  );
};

export default PersonalLoanApply;