"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  fullName: string;
  email: string;
  country: string;
  loanAmount: number | string;
  employmentStatus: string;
  birthDate: string;
  ssn: string;
  address: string;
  number: string;
  annualIncome: string;
  nidNumber: string;
  maritalStatus: string;
  creditScore: string;
  // Add the country field
  // Add more fields as needed
}

const page = () => {
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [showData, setShowData] = useState(false);

  const [currentLoan, setCurrentLoan] = useState<number | string>(""); // State to store the current age

  //form data
  const [formData, setFormData] = useState<FormData>({
    fullName: "asik",
    email: "as@gmail.com",
    country: "bangladesh",
    loanAmount: "25",
    employmentStatus: "employed",
    birthDate: " 01/01/1990",
    ssn: " 123-45-6789",
    address: " dhaka",
    number: " 1234567890",
    annualIncome: " 500000",
    nidNumber: " 1234567890",
    maritalStatus: " single",
    creditScore: " 500",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form data:", data);
    setFormData(data);
    setShowData(true);
    // Add logic to handle the form data (e.g., send to API)
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setCurrentLoan(value); // Update the state
  };
  const handleConfirmApply = async () => {
    try {
      console.log("data posted", formData);
    } catch (error) {
      console.log("data will not posted");
    }
    //  try {
    //    const response = await fetch("YOUR_API_ENDPOINT", {
    //      method: "POST",
    //      headers: {
    //        "Content-Type": "application/json",
    //      },
    //      body: JSON.stringify(formData),
    //    });

    //    if (response.ok) {
    //      console.log("Loan application submitted successfully!");
    //      // You can redirect the user or perform any other action here
    //    } else {
    //      console.error("Failed to submit loan application");
    //    }
    //  } catch (error) {
    //    console.error("Error submitting loan application:", error);
    //  }
  };
  return (
    <div>
      <div
        className={`flex flex-col gap-4 mx-3 ${
          showData ? "hidden" : "block"
        } showData`}
      >
        <form className="m-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Informationssssssssss
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    name
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("fullName", {
                        required: "Full Name is required",
                      })}
                      className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("email", {
                        required: "Email is required",
                      })}
                      className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Date of Birth
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      {...register("birthDate", {
                        required: "Birth Date is required",
                      })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="ssn"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Social Security Number (SSN)
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("ssn", {
                        required: "SSN Number is required",
                      })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="annualIncome"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Annual Income
                  </label>
                  <input
                    {...register("annualIncome", {
                      required: "Annual Income is required",
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2 ">
                    <select
                      {...register("country", {
                        required: "Country is required",
                      })}
                      className="block w-full overflow-hidden rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="bangladesh">Bangladesh</option>
                      <option value="india">India</option>
                      <option value="usa">United State</option>
                      <option value="uk">United Kingdom</option>
                      <option value="uae">UAE</option>
                      <option value="france">France</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("address", {
                        required: "Address is required",
                      })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="employmentStatus"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Employment Status
                  </label>
                  <select
                    {...register("employmentStatus", {
                      required: "Employment Status is required",
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="employed">Employed</option>
                    <option value="unemployed">Unemployed</option>
                  </select>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      {...register("number", {
                        required: "Phone Number is required",
                      })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="nidNumber"
                    className="block text-sm font-medium text-gray-600"
                  >
                    NID Number
                  </label>
                  <input
                    {...register("nidNumber", {
                      required: "NID Number is required",
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="creditScore"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Credit Score
                  </label>
                  <input
                    {...register("creditScore", {
                      required: "Credit Score is required",
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="maritalStatus"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Marital Status
                  </label>
                  <select
                    {...register("maritalStatus", {
                      required: "Marital Status is required",
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                </div>
                <div className="sm:col-span-4">
                  <div>
                    <label>Loan-Amount</label>
                    <input
                      type="range"
                      {...register("loanAmount", {
                        required: "Age is required",
                      })}
                      min="1000"
                      max="50000"
                      className="my-2"
                      onChange={handleAgeChange}
                    />
                    <p>{errors.loanAmount?.message}</p>
                    <h1>
                      Current Loan: <span>$</span> {currentLoan}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <input type="submit" />
          </div>
        </form>
      </div>
      <div
        className={`flex flex-col gap-4 mx-3 ${
          showData ? "block " : "hidden"
        } justify-center items-center bg-[#E6E6E6] py-4 rounded-md my-5`}
      >
        
        <h1 className="text-xl font-semibold">
          Check Your Personal information before submit
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-[14px] lg:text-[18px]  tracking-wide  ">
              Name:{formData.fullName}
            </h1>
            <h1 className="text-[14px] lg:text-[18px] tracking-wide  ">
              Email: {formData.email}
            </h1>
            <h1 className="text-[14px] lg:text-[18px] tracking-wide  ">
              Number: {formData.number}
            </h1>
            <h1 className="text-[14px] lg:text-[18px] tracking-wide  ">
              Birth-Date: {formData.birthDate}
            </h1>
            <h1 className="text-[14px] lg:text-[18px] tracking-wide  ">
              Employment-Status: {formData.employmentStatus}
            </h1>
            <h1 className="text-[14px] lg:text-[18px] tracking-wide  ">
              Country: {formData.country}
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[14px] lg:text-[18px] tracking-wide  ">
              Street Address: {formData.address}
            </h1>
            <h1 className="text-[14px] lg:text-[18px] tracking-wide  ">
              SSN Number: {formData.ssn}
            </h1>
            <h1 className="text-[14px] lg:text-[18px] tracking-wide  ">
              NID: {formData.nidNumber}
            </h1>
            <h1 className="text-[14px] lg:text-[18px] tracking-wide  ">
              Marital Status: {formData.maritalStatus}
            </h1>
            <h1 className="text-[14px] lg:text-[18px] tracking-wide  ">
              Annual-Income: {formData.annualIncome}
            </h1>
            <h1 className="text-[14px] lg:text-[18px] tracking-wide  ">
              Credit-Score: {formData.creditScore}
            </h1>
            <h1 className="text-[14px] lg:text-[18px] tracking-wide  ">
              Loan-Amount: {formData.age}
            </h1>
          </div>
        </div>
        <Link
          href={`${pathname}/loan-approve`}
          className="btn w-[250px] ml-1 my-4 rounded-md  text-white text-center py-2 px-4 bg-[#012169]"
        >
          <button onClick={handleConfirmApply}>Confirm Loan Apply</button>
        </Link>
      </div>
    </div>
  );
};

export default page;
