import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Button from "@/components/Common/Button";
import Input from "../input/Input";
import Form from "@/components/Forms/Form/Form";
import FormInput from "@/components/Forms/FormInput/FormInput";
import { useSigninMutation } from "@/redux/api/authApi";

interface AuthVariable {
  variant: "LOGIN" | "REGISTER";
}

const SignIn = ({ variant }: AuthVariable) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [signin] = useSigninMutation();
  const onSubmit = async (values: any) => {
    console.log(values);
    try {
      const res = await signin(values)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form submitHandler={onSubmit} >
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
          {variant === "LOGIN" ? "Sign In" : "Sign Up"}
        </Button>
      </div>
    </Form>
  );
};

export default SignIn;
