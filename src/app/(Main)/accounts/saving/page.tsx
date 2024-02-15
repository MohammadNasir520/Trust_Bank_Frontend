"use client";
import CustomFileInput from "@/components/Forms/CustomFileInput/CustomFileInput";
import Form from "@/components/Forms/Form/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker/FormDatePicker";
import FormInput from "@/components/Forms/FormInput/FormInput";
import FormRadioField from "@/components/Forms/FormRatioButton/FormRatioButton";
import FormSelectField from "@/components/Forms/FormSelectedField/FormSelectedField";
import { accountOptions, bloodOptions, genderOptions, occupationOptions } from "@/constants/constants";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import accountSchema from "@/schemas/account";
import { useForm } from "react-hook-form";
import FormTextArea from "@/components/Forms/FormTextArea/FormTextArea";

const SavingAccount = () => {
  
  const [currentStep, setCurrentStep] = useState(0);

  const onSubmit = async (values: any) => {
    console.log(values);
    try {
    } catch (err) {
      console.log(err);
    }
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="flex justify-center py-12 ">
      <div className="shadow-sm p-8 rounded-lg border">
        <Form submitHandler={onSubmit} resolver={yupResolver(accountSchema)}>
          <div className="space-y-12">
            {currentStep === 0 && (
              <div className="border-b border-gray-900/10 pb-8">
                <h2 className="text-base text-lg font-semibold leading-7 text-gray-900 lg:px-2 xl:px-2">
                  Step 1
                </h2>
                <div className="">
                  <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900 lg:px-2 xl:px-2">
                      Personal Information
                    </h2>

                 
                    <div className="mt-4 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center">              
                      <div className="sm:col-span-1 flex justify-center">
                        <div>
                          <FormInput
                            name="fName"
                            label="First Name"
                            placeholder="First Name"
                            className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-1 flex justify-center">
                        <div>
                          <FormInput
                            name="mName"
                            label="Middle Name"
                            placeholder="Middle Name"
                            className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-1 flex justify-center">
                        <div>
                          <FormInput
                            name="lName"
                            label="Last Name"
                            placeholder="Last Name"
                            className="w-[300px] h-[45px]  text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-1 flex justify-center">
                        <div>
                          <FormInput
                            name="contactNo"
                            label="Contact"
                            placeholder="Contact"
                            className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-1 flex justify-center">
                        <div>
                          <FormInput
                            name="emergencyContactNo"
                            label="Emergency Contact"
                            placeholder="Emergency Contact"
                            className="w-[300px] h-[45px] text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                        </div>
                      </div>

                       

                      <div className="sm:col-span-1 flex justify-center">
                        <div>
                          <FormSelectField
                            name="gender"
                            label="Gender"
                            options={genderOptions}
                            className="w-[300px] h-[45px] text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-1 flex justify-center">
                
                <div>
                  <FormSelectField
                    name="blood"
                    label="Blood"
                    options={bloodOptions}
                    className="w-[300px] h-[45px] text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                  />
                </div>
              </div>

              <div className="sm:col-span-1 flex justify-center">
                        <div>
                          <FormDatePicker
                            name="dob"
                            label="Date of birth"
                            className="w-[300px] h-[45px]  text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-1 ">
                        <div>
                          <CustomFileInput
                          label="Photo"
                          id="fileInput"
                          />
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              </div>
            )}
            {currentStep === 1 && (
              <div className="border-b border-gray-900/10 pb-8">
                <h2 className="text-base text-lg font-semibold leading-7 text-gray-900 lg:px-2 xl:px-2">
                  Step 2
                </h2>
                <div className="">
                  <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900 lg:px-2 xl:px-2">
                      Basic Information
                    </h2>

                    <div className="mt-4 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center">
                  

                         

                 

                      <div className="sm:col-span-1 flex justify-center">
                        <div>
                          <FormInput
                            name="companyName"
                            label="Company Name"
                            placeholder="Company Name"
                            className="w-[300px] h-[45px] text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-1 flex justify-center">
                        <div>
                          <FormInput
                            name="companyLocation"
                            label="Company Location"
                            placeholder="Company Location"
                            className="w-[300px] h-[45px] text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-1 flex justify-center">
                        <div>
                          <FormInput
                            name="companyContact"
                            label="Company Contact"
                            placeholder="Company Contact"
                            className="w-[300px] h-[45px] text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                        </div>
                      </div>

                      
                      <div className="sm:col-span-1 flex justify-center">
                        <div>
                          <FormInput
                            name="employeeId"
                            label="Employee ID "
                            placeholder="Employee ID"
                            className="w-[300px] h-[45px] text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                        </div>
                      </div>

                    

                      <div className="sm:col-span-1 flex justify-center">
                        <div>
                          <FormInput
                            name="nidNumber"
                            label="NID Number"
                            placeholder="NID Number"
                            className="w-[300px] h-[45px] text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                        </div>
                      </div>

                  

                   

                    

                    

                      <div className="sm:col-span-1 ">
                        <div>
                          <FormRadioField
                            name="citizen"
                            label="Citizen"
                            options={["International", "Bangladesh"]}
                           
                          />
                        </div>
                      </div>

                    

                        
                  
                      <div className="sm:col-span-1 flex justify-center">
                        <div>
                          <FormTextArea
                            name="presentAddress"
                            label="Present Address"
                            placeholder="Present Address"
                            className="w-[300px]  text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-1 flex justify-center">
                        <div>
                          <FormTextArea
                            name="parmanentAddress"
                            label="Parmanent Address"
                            placeholder="Parmanent Address"
                            className="w-[300px]  text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          
                          />
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="border-b border-gray-900/10 pb-8">
                <h2 className="text-base text-lg font-semibold leading-7 text-gray-900 lg:px-2 xl:px-2">
                  Step 3
                </h2>
                <div className="">
                  <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900 lg:px-2 xl:px-2">
                     Nominy Information
                    </h2>

                    <div className="mt-4 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center">
                      {/* Adjusted grid-cols for different screen sizes and centered the items */}
                      <div className="sm:col-span-1 flex justify-center">
                     
                        <div>
                          <FormInput
                            name="nominyName"
                            label="Nominy Name"
                            placeholder="Nominy Name"
                            className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-1 flex justify-center">
                        {" "}
                        {/* Adjusted col-span to occupy 1/2 of the row for medium devices and centered the content */}
                        <div>
                          <FormInput
                            name="relationship"
                            label="Relationship"
                            placeholder="Relationship"
                            className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-1 flex justify-center">
                        {" "}
                        {/* Adjusted col-span to occupy 1/2 of the row for medium devices and centered the content */}
                        <div>
                        <FormSelectField
                            name="nominyOccupation"
                            label="Nominy Occupation"
                            options={occupationOptions}
                            className="w-[300px] h-[45px] text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                          
                        </div>
                      </div>

                      <div className="sm:col-span-1 flex justify-center">
                      
                        <div>
                          <FormInput
                            name="nominyContact"
                            label="Nominy Contact"
                            placeholder="Nominy Contact"
                            className="w-[300px] h-[45px] text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-1 flex justify-center">
                      
                        <div>
                          <FormInput
                            name="nominyNID"
                            label="Nominy NID Number"
                            placeholder="Nominy NID Numbe"
                            className="w-[300px] h-[45px] text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          />
                        </div>
                      </div>


                      <div className="sm:col-span-1 flex justify-center ">
                        <div>
                          <FormTextArea
                            name="nominyAddress"
                            label="Nominy Address"
                            placeholder="Nominy Address"
                            className="w-[300px]  text-sm px-2 py-3 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                          
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-1 ">
                        <div>
                          <CustomFileInput
                          label="Nominy Photo"
                          id="fileInput"
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`mt-6 flex items-center  ${
              currentStep === 0 ? "justify-end" : "justify-between"
            } `}
          >
            {currentStep !== 0 && (
              <button
                type="button"
                onClick={handlePreviousStep}
                className="rounded-md bg-[#012169] py-2 px-3 text-sm font-semibold text-white shadow-sm "
              >
                Previous
              </button>
            )}
            {currentStep !== 2 && (
              <button
                type="button"
                onClick={handleNextStep}
                className="rounded-md bg-[#012169] py-2 px-3 text-sm font-semibold text-white shadow-sm"
              >
                Next
              </button>
            )}
            {currentStep === 2 && (
              <button
                type="submit"
                className="rounded-md bg-[#012169] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                open account
              </button>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SavingAccount;
