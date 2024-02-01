import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Button from "@/components/Common/Button";
import Input from "../input/Input";
import Form from "@/components/Forms/Form/Form";
import FormInput from "@/components/Forms/FormInput/FormInput";
import { useSignupMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {push} = useRouter()
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [signup] = useSignupMutation();

  const onSubmit = async (values: any) => {
 
    try {
      const res = await signup(values).unwrap();
      console.log(res);
          toast("registration successfully done", {
        icon: <span style={{ color: "white" }}>✔</span>,
        style: {
          borderRadius: "10px",
          background: "#012169",
          color: "#fff",
        },
        duration: 2000,
      });
      setTimeout(() => {
        push("/auth/signin/")
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
    <Form submitHandler={onSubmit} className="py-2 bg-white p-4">
      <FormInput
        name="name"
        label="Name"
        placeholder="Enter your full name"
        className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
      />
      <FormInput
        name="email"
        label="Email"
        placeholder="Enter your email"
        className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
      />
      <div className="relative">
        <FormInput
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
        />

        <button
          type="button"
          className="absolute top-3/4 right-3 transform -translate-y-1/2 focus:outline-none"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <HiEyeOff /> : <HiEye />}
        </button>
      </div>

    

      <div className="mt-2">
        <Button disabled={isLoading} type="submit">
          Sign Up
        </Button>
      </div>
    </Form>
    </>
    
  );
};

export default SignUpForm;
