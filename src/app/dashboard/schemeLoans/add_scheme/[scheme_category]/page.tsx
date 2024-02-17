'use client'

import { useCreateLoanSchemeMutation } from "@/redux/api/loanSchemeApi"
import { Input } from "@chakra-ui/react";
import { useParams } from "next/navigation"
import { useState } from "react";
import toast from "react-hot-toast";
import { TagsInput } from "react-tag-input-component";

export default function AddScheme() {

    const [purpose, setPurpose] = useState<string[]>([]);
    const [eligibility, setEligibility] = useState<string[]>([]);
    const [facility_types, setFacility_types] = useState<string[]>([]);
    const [amount_terms, setAmount_terms] = useState<string[]>([]);
    const [interest_rates, setInterest_rates] = useState<string[]>([]);
    const [repayment, setRepayment] = useState<string[]>([]);
    const [security, setSecurity] = useState<string[]>([]);


    const { scheme_category } = useParams()

    const [createScheme] = useCreateLoanSchemeMutation();

    const handleAddScheme = async (e: any) => {
        e.preventDefault();
        const data = {
            title: e.target.title.value,
            amount: Number(e.target.amount.value),
            scheme_category,
            purpose,
            eligibility,
            facility_types,
            amount_terms,
            interest_rates,
            repayment,
            security
        }
        const res: any = await createScheme(data).unwrap()
        if (res?.success) {
            console.log({ res })
            toast.success('Scheme Added')
        }
    }
    return (
        <div className="m-5">
            <form onSubmit={handleAddScheme} className="grid grid-cols-2  gap-4 bg-white py-4 px-5 rounded">
                <div className="col-span-2">
                    <h1 className="font-medium text-xl">Create Loan Scheme for <span className="text-blue-600 capitalize">{scheme_category}</span></h1>
                </div>
                <div>
                    <label htmlFor="">Scheme Title</label>
                    <input required type="text" name="title" placeholder="Write a Scheme Title" className="px-3 py-2 w-full border-[1px] border-gray-300 focus:outline-sky-600 rounded" />
                </div>
                <div>
                    <label htmlFor="">Scheme Category</label>
                    <input required type="text" value={scheme_category} placeholder="Write amount" readOnly className="px-3 capitalize py-2 w-full border-[1px] border-gray-300 focus:outline-sky-600 rounded" />
                </div>
                <div>
                    <label htmlFor="">Scheme Amount</label>
                    <input required type="Number" name="amount" placeholder="Write amount" className="px-3  py-2 w-full border-[1px] border-gray-300 focus:outline-sky-600 rounded" />
                </div>

                <div>
                    <label htmlFor="">Purpose / Objective</label>
                    <TagsInput
                        value={purpose}
                        onChange={setPurpose}
                        name="purpose"
                        placeHolder="Write and press Enter Write and press Enter Write and press Enter"
                    />
                </div>
                <div>
                    <label htmlFor="">Eligibility</label>
                    <TagsInput
                        value={eligibility}
                        onChange={setEligibility}
                        name="eligibility"
                        placeHolder="Write and press Enter"
                    />
                </div>
                <div>
                    <label htmlFor="">Types Of Facility Available</label>
                    <TagsInput
                        value={facility_types}
                        onChange={setFacility_types}
                        name="facility_types"
                        placeHolder="Write and press Enter"
                    />
                </div>
                <div>
                    <label htmlFor="">Amount Terms for Loan</label>
                    <TagsInput
                        value={amount_terms}
                        onChange={setAmount_terms}
                        name="amount_terms"
                        placeHolder="Write and press Enter"
                    />
                </div>
                <div>
                    <label htmlFor="">Interest Rates</label>
                    <TagsInput
                        value={interest_rates}
                        onChange={setInterest_rates}
                        name="interest_rates"
                        placeHolder="Write and press Enter"
                    />
                </div>
                <div>
                    <label htmlFor="">Repayment</label>
                    <TagsInput
                        value={repayment}
                        onChange={setRepayment}
                        name="repayment"
                        placeHolder="Write and press Enter"
                    />
                </div>
                <div>
                    <label htmlFor="">Security</label>
                    <TagsInput
                        value={security}
                        onChange={setSecurity}
                        name="security"
                        placeHolder="Write and press Enter"
                    />
                </div>
                <div className="col-span-2 flex justify-end items-end"><button type="submit" className="px-3 py-2 h-fit bg-blue-500 text-white rounded">Add Scheme</button></div>
            </form>

        </div>
    )
}
