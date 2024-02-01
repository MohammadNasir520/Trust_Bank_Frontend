import React, { ReactElement, ReactNode, useEffect } from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
} from "react-hook-form";

type FormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type FormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
  className?: string; 
  email?:string;
  password?:string;
  purpose?:string;
  income?:string;
  employment?:string;
  guarantorName?:string;
  guarantorAddress?:string;
  guarantorPhone?:string;

  // Added className prop for dynamic class
} & FormConfig;

const Form = ({ children, submitHandler, defaultValues, resolver, className }: FormProps) => {
  const formConfig: FormConfig = {};

  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;
  if (!!resolver) formConfig["resolver"] = resolver;

  const methods = useForm<FormProps>(formConfig);
  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset({
      email:"",
      password:"",
      purpose:"",
      income:"",
      employment:"",
      guarantorName:"",
      guarantorAddress:"",
      guarantorPhone:""
    });
  }

  useEffect(() => reset(defaultValues), [defaultValues, reset, methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={className || ''}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
