"use client";
import Form from "@/components/Forms/Form/Form";
import FormInput from "@/components/Forms/FormInput/FormInput";
import FormRadioField from "@/components/Forms/FormRatioButton/FormRatioButton";
import FormTextArea from "@/components/Forms/FormTextArea/FormTextArea";
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
      <div className="flex flex-col lg:flex-row justify-center items-center py-4">
        <div className="shadow-sm p-4 rounded-lg border">
          <Form submitHandler={onSubmit} className="m-10">
            <div className="space-y-4">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Loan Apply Form
                </h2>

                <div className="mt-4 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-9">
                  <div className="sm:col-span-3">
                    <FormInput
                      name="currentOccupation"
                      label="Current Occupation"
                      placeholder="Current Occupation"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <FormInput
                      name="employmentStatus"
                      label="Employment Status"
                      placeholder="Employment Status"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <FormInput
                      name="lengthofEmployment"
                      label="Length of Employment"
                      placeholder="Length of Employment"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <FormInput
                      name="monthlyIncome"
                      label="Monthly Income"
                      placeholder="Monthly Income"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="managerName"
                      label="Supervisor/Manager Name"
                      placeholder="Supervisor/Manager Name"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="managerContactNumber"
                      label="Supervisor/Manager Contact Number"
                      placeholder="Supervisor/Manager Contact Number"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <FormInput
                      name="loanName"
                      label="Loan Name"
                      placeholder="Loan Name"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="loanAmount"
                      label="Loan Amount"
                      placeholder="Loan Amount"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="reference1Name"
                      label="Reference 1 Name"
                      placeholder="Reference 1 Name"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="reference1Relationship"
                      label="Relationship"
                      placeholder="Relationship"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="reference1NID"
                      label="Reference 1 NID"
                      placeholder="NID Number"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="reference1Contact"
                      label="Reference 1 Contact"
                      placeholder="Contact Number"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <FormInput
                      name="reference2Name"
                      label="Reference 2 Name"
                      placeholder="Reference 1 Name"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="reference2Relationship"
                      label="Relationship"
                      placeholder="Relationship"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="reference2NID"
                      label="Reference 2 NID"
                      placeholder="NID Number"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="reference2Contact"
                      label="Reference 2 Contact"
                      placeholder="Contact Number"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <FormRadioField
                      name="ExistingLoansStatus"
                      label="Any Existing Loans"
                      options={["Yes", "No"]}
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <FormTextArea
                      name="loanPurpose"
                      label="Loan Purpose"
                      placeholder="Loan Purpose"
                      className="w-[300px]  text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
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
      </div>
      <div className=" mb-3">
        <LoanCalculatorPage />
      </div>
    </div>
  );
};

export default PersonalLoanApply;
