"use client";
import CustomFileInput from "@/components/Forms/CustomFileInput/CustomFileInput";
import Form from "@/components/Forms/Form/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker/FormDatePicker";
import FormInput from "@/components/Forms/FormInput/FormInput";
import FormRadioField from "@/components/Forms/FormRatioButton/FormRatioButton";
import FormSelectField from "@/components/Forms/FormSelectedField/FormSelectedField";
import LoanCalculatorPage from "@/components/pages/home_page/LoanCalculatorPage";
import { accountOptions } from "@/constants/constants";
import { useAccountMutation } from "@/redux/api/authApi";

const Test = () => {
  const [account] = useAccountMutation();
  const onSubmit = async (values: any) => {
    const obj = { ...values };
    obj.profileImage = "demo url";
    obj.age = parseInt(obj.age);
    try {
      console.log(obj);
      const res = await account(obj).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div></div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div>
          <Form submitHandler={onSubmit} className="m-10">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Open your account
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <div>
                      <FormInput name="contactNo" label="Phone" type="number" />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <div>
                      <FormInput
                        name="profession"
                        label="Profession"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <FormInput name="age" label="Age" type="number" />
                  </div>

                  <div className="sm:col-span-3">
                    <div>
                      <FormInput
                        type="string"
                        label="Education"
                        name="education"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <div>
                      <FormSelectField
                        name="accountType"
                        label="Account Type"
                        options={accountOptions}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <div className="mt-1">
                      <FormRadioField
                        name="citizenShip"
                        label="Citizen"
                        options={["International", "Bangladesh"]}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <div>
                      <CustomFileInput
                        label="Upload File"
                        id="fileInput"
                        // onChange={handleFileChange}
                        className="mb-8"
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
                create
              </button>
            </div>
          </Form>
        </div>
        <div className="hidden lg:block h-1/2 w-[3px]  bg-black mx-2"> </div>
      </div>
    </div>
  );
};

export default Test;
