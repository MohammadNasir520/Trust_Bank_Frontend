"use client";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Button from "@/components/Common/Button";
import SIgnUp from "./signup/SignUp";
import SignIn from "./signin/SignIn";

const AuthUI = () => {
  const [variant, setVariant] = useState("LOGIN");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = () => {
    setVariant((prevVariant) =>
      prevVariant === "LOGIN" ? "REGISTER" : "LOGIN"
    );
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="w-full h-screen flex flex-col gap-1 items-center justify-center">
      <div className="sm:w-1/2 md:w-1/3">
        <div className="text-base lg:text-xl md:text-lg font-bold">
          {variant === "LOGIN" ? "Sign in" : "Create an account"}
        </div>
        <div className="text-base my-2">
          {variant === "LOGIN"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span
            onClick={toggleVariant}
            className="text-[#1F305E] font-semibold underline cursor-pointer"
          >
            {variant === "LOGIN" ? "Sign up" : "Sign in"}
          </span>
        </div>

        {/* Form start here  */}
        {variant === "LOGIN" ? (
          <SignIn variant="LOGIN" />
        ) : (
          <SIgnUp variant="REGISTER" />
        )}
      </div>
    </div>
  );
};

export default AuthUI;
