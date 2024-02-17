"use client"
import { useState } from "react";
import SignInForm from "./SignInForm/SignInForm";
import Link from "next/link";

const SignInPage = () => {
  const [variant, setVariant] = useState("LOGIN");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="w-full  flex flex-col gap-1 items-center justify-center py-6">
      <div className="sm:w-1/2 md:w-1/3 shadow-sm p-8 rounded-lg border">
        <div className=" lg:text-xl md:text-lg font-bold text-center">
        Sign in
        </div>
        <div className="text-base  text-center">     
      <span className="text-sm"> Don't have an account?</span> 
        <Link href="/auth/signup">
          <span
            className="text-[#1F305E] font-semibold underline cursor-pointer text-sm"
          >
          Sign up
          </span>
          </Link>
        </div>

       
          <SignInForm/>
     
      </div>
    </div>
  );
};

export default SignInPage;
