"use client";
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
    <div className="w-full flex flex-col gap-1 items-center justify-center py-6">
      <div className="sm:w-1/2 md:w-1/3 shadow-sm p-8 rounded-lg border">
        <div className="text-base lg:text-xl md:text-lg font-bold text-center">
          Create an account
        </div>
        <div className="text-base my-2 text-center">
          <span className="text-sm "> Already have an account?</span>
          <Link href="/auth/signin">
            <span className="text-[#1F305E] font-semibold underline cursor-pointer text-sm text-center">
              Sign in
            </span>
          </Link>
        </div>

        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
