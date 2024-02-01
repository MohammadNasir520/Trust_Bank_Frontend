
"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  fullName: string;
  email: string;
  country: string; // Add the country field
  // Add more fields as needed
}

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form data:", data);
    // Add logic to handle the form data (e.g., send to API)
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name Input */}
        <div>
          <label>Full Name</label>
          <input
            {...register("fullName", { required: "Full Name is required" })}
          />
          <p>{errors.fullName?.message}</p>
        </div>

        {/* Email Input */}
        <div>
          <label>Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
            })}
          />
          <p>{errors.email?.message}</p>
        </div>

        {/* Country Select Input */}
        <div>
          <label>Country</label>
          <select {...register("country", { required: "Country is required" })}>
            <option value="">Select Country</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
            {/* Add more options as needed */}
          </select>
          <p>{errors.country?.message}</p>
        </div>

        {/* Add more fields as needed */}

        {/* Submit Button */}
        <button className="bg-neutral-600 rounded-md px-4 py-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
//
"use client";
import LoanCalculatorPage from "@/components/pages/home_page/LoanCalculatorPage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: string;
  gender: GenderEnum;
}

const page = () => {
  const pathname = usePathname();
  const [showData, setShowData] = useState(false);

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  // const [formData, setFormData] = useState({
  //   name: "",
  //   dateOfBirth: "",
  //   ssn: "",
  //   address: "",
  //   email: "",
  //   phoneNumber: "",
  //   employmentStatus: "",
  //   annualIncome: "",

  //   nidNumber: "",
  //   creditScore: "",
  //   maritalStatus: "",
  //   loanAmount: "",
  //   country: "",

  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  // //after submit data show
  //       setShowData(true);
  //     // Handle form submission logic (you can send data to an API, etc.)
  //     console.log("Form Data:", formData);
  //   };

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [country, setCountry] = useState("");
  // const [streetAddress, setStreetAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [region, setRegion] = useState("");
  // const [postalCode, setPostalCode] = useState("");
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   country: "",
  //   streetAddress: "",
  //   city: "",
  //   region: "",
  //   postalCode: "",
  // });

  // // Function to handle form submission
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   // Collect form data and perform desired actions
  //   const formData = {
  //     firstName,
  //     lastName,
  //     email,
  //     country,
  //     streetAddress,
  //     city,
  //     region,
  //     postalCode,
  //   };

  //   // You can use formData as needed (e.g., send it to an API, store in state, etc.)
  //   console.log(formData);
  //   setFormData(formData);
  // };

  return (
    <div>
      <div>
        <div>
          <p>Current pathname: {pathname}</p>
        </div>
      </div>
      <div
        className={`flex flex-col gap-4 mx-3 ${
          showData ? "hidden" : "block"
        } showData`}
      >
        <div>
          <form className="m-10" onSubmit={handleSubmit(onSubmit)}>
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
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="dateOfBirth"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Date of Birth
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        autoComplete="dateOfBirth"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleChange}
                        value={formData.dateOfBirth}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="ssn"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Social Security Number (SSN)
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="ssn"
                        name="ssn"
                        value={formData.ssn}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <div className="mt-2">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        value={formData.country}
                        onChange={handleChange}
                      >
                        <option>Bangladesh</option>
                        <option>India</option>
                        <option>United State</option>
                        <option>United Kingdom</option>
                        <option>UAE</option>
                        <option>France</option>
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
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
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
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
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
                      id="employmentStatus"
                      name="employmentStatus"
                      value={formData.employmentStatus}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="employed">Employed</option>
                      <option value="unemployed">Unemployed</option>
                    </select>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="annualIncome"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Annual Income
                    </label>
                    <input
                      type="text"
                      id="annualIncome"
                      name="annualIncome"
                      value={formData.annualIncome}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="nidNumber"
                      className="block text-sm font-medium text-gray-600"
                    >
                      NID Number
                    </label>
                    <input
                      type="text"
                      id="nidNumber"
                      name="nidNumber"
                      value={formData.nidNumber}
                      onChange={handleChange}
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
                      type="text"
                      id="creditScore"
                      name="creditScore"
                      value={formData.creditScore}
                      onChange={handleChange}
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
                      id="maritalStatus"
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                    </select>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="loanAmount"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Loan Amount
                    </label>
                    <input
                      type="range"
                      id="loanAmount"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleChange}
                      min="0"
                      max="100000" // Adjust the maximum value as needed
                      step="1000" // Adjust the step size as needed
                      className="mt-1 w-full"
                    />
                    <span className="text-sm text-gray-600">
                      Amount: ${formData.loanAmount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <input type="submit" />
            </div>
          </form>
        </div>
        <div className="hidden lg:block h-1/2 w-[3px]  bg-black mx-2"> </div>
        <div
          className={`flex flex-col gap-4 mx-3 ${
            showData ? "block" : "hidden"
          } showData`}
        >
          {/* firstName, lastName, email, country, streetAddress, city, region,
          postalCode, */}

          <h1 className="text-2xl tracking-wide  ">Name:{formData.name}</h1>
          <h1 className="text-xl tracking-wide  ">Email: {formData.email}</h1>
          <h1 className="text-xl tracking-wide  ">
            Number: {formData.phoneNumber}
          </h1>
          <h1 className="text-xl tracking-wide  ">
            Birth-Date: {formData.dateOfBirth}
          </h1>
          <h1 className="text-xl tracking-wide  ">
            Employment-Status: {formData.phoneNumber}
          </h1>
          <h1 className="text-xl tracking-wide  ">
            Country: {formData.country}
          </h1>
          <h1 className="text-xl tracking-wide  ">
            Street Address: {formData.address}
          </h1>
          <h1 className="text-xl tracking-wide  ">
            Country: {formData.country}
          </h1>
          <h1 className="text-xl tracking-wide  ">NID: {formData.nidNumber}</h1>
          <h1 className="text-xl tracking-wide  ">
            Marital Status: {formData.maritalStatus}
          </h1>
          <h1 className="text-xl tracking-wide  ">
            Annual-Income: {formData.annualIncome}
          </h1>
          <h1 className="text-xl tracking-wide  ">
            Credit-Score: {formData.creditScore}
          </h1>
          <h1 className="text-xl tracking-wide  ">
            Loan-Amount: {formData.loanAmount}
          </h1>
          <Link
            href={`${pathname}/loan-approve`}
            className="btn w-[250px] ml-1 my-4 rounded-md  text-white text-center py-2 px-4 bg-[#012169]"
          >
            <button>Confirm Loan Apply</button>
          </Link>
        </div>
      </div>
      <div className=" mb-3">
        <LoanCalculatorPage />
      </div>
    </div>
  );
};

export default page;



///
  <h1 className="text-2xl tracking-wide  ">Name:{formData.name}</h1>
        <h1 className="text-xl tracking-wide  ">Email: {formData.email}</h1>
        <h1 className="text-xl tracking-wide  ">
          Number: {formData.phoneNumber}
        </h1>
        <h1 className="text-xl tracking-wide  ">
          Birth-Date: {formData.dateOfBirth}
        </h1>
        <h1 className="text-xl tracking-wide  ">
          Employment-Status: {formData.phoneNumber}
        </h1>
        <h1 className="text-xl tracking-wide  ">Country: {formData.country}</h1>
        <h1 className="text-xl tracking-wide  ">
          Street Address: {formData.address}
        </h1>
        <h1 className="text-xl tracking-wide  ">Country: {formData.country}</h1>
        <h1 className="text-xl tracking-wide  ">NID: {formData.nidNumber}</h1>
        <h1 className="text-xl tracking-wide  ">
          Marital Status: {formData.maritalStatus}
        </h1>
        <h1 className="text-xl tracking-wide  ">
          Annual-Income: {formData.annualIncome}
        </h1>
        <h1 className="text-xl tracking-wide  ">
          Credit-Score: {formData.creditScore}
        </h1>
        <h1 className="text-xl tracking-wide  ">
          Loan-Amount: {formData.loanAmount}
        </h1>
        <Link
          href={`${pathname}/loan-approve`}
          className="btn w-[250px] ml-1 my-4 rounded-md  text-white text-center py-2 px-4 bg-[#012169]"
        >
          <button>Confirm Loan Apply</button>
        </Link>