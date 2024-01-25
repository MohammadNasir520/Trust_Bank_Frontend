"use client";

import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Button from "@/components/Common/Button";
import Input from "../input/Input";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

interface AuthVariable {
  variant: "LOGIN" | "REGISTER";
}

// export interface ISignUpInput {
//   name: string;
//   email: string;
//   disabled: boolean;
// }
const SIgnUp = ({ variant }: AuthVariable) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSignUp: SubmitHandler<FieldValues> = (data: any) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  return (
    <form className="my-2 " onSubmit={handleSubmit(handleSignUp)}>
      <input type="text" {...register("nameRH")} />
      <Input
        id="name"
        label="Username"
        type="name"
        // name="name"
        register={register}
        // errors={errors}
        disabled={isLoading}
        {...register("name")}
      />
      <Input
        id="email"
        label="Email Address"
        type="email"
        // name="email"
        // register={register}
        // errors={errors}
        disabled={isLoading}
        {...register("email")}
      />
      <div className="relative">
        <Input
          id="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          // register={register}
          // name="password"
          // errors={errors}
          disabled={isLoading}
          {...register("password")}
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
