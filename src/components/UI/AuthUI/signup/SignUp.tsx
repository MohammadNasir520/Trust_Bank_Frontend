"use client";

import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Button from "@/components/Common/Button";
import Input from "../input/Input";

interface AuthVariable {
  variant: "LOGIN" | "REGISTER";
}

const SIgnUp = ({ variant }: AuthVariable) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <form className="my-2">
      <Input
        id="name"
        label="Username"
        type="name"
        // register={register}
        // errors={errors}
        disabled={isLoading}
      />
      <Input
        id="email"
        label="Email Address"
        type="email"
        // register={register}
        // errors={errors}
        disabled={isLoading}
      />
      <div className="relative">
        <Input
          id="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          // register={register}
          // errors={errors}
          disabled={isLoading}
        />
        <button
          type="button"
          className="absolute top-3/4 right-3 transform -translate-y-1/2 focus:outline-none"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <HiEyeOff /> : <HiEye />}
        </button>
      </div>

      <div>
        <Button disabled={isLoading} type="submit">
          {variant === "LOGIN" ? "Sign In" : "Sign Up"}
        </Button>
      </div>
    </form>
  );
};

export default SIgnUp;
