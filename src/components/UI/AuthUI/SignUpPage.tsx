"use client"
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Button from "@/components/Common/Button";

import SignIn from "./signin/SignIn";
import SignUpForm from "./SignUpForm/SignUpForm";
import Link from "next/link";

const SignUpPage = () => {
  const [variant, setVariant] = useState("LOGIN");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);



  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="w-full h-screen flex flex-col gap-1 items-center justify-center">
      <div className="sm:w-1/2 md:w-1/3">
        <div className="text-base lg:text-xl md:text-lg font-bold">
         Create an account
        </div>
        <div className="text-base my-2">     
           <span className="text-sm"> Already have an account?</span>
         <Link href="/auth/signin">
         <span
            className="text-[#1F305E] font-semibold underline cursor-pointer text-sm"
          >
           Sign in
          </span>
         </Link>
        </div>

       
          <SignUpForm/>
     
      </div>
    </div>
  );
};

export default SignUpPage;
