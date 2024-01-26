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
  className?: string; // Added className prop for dynamic class
} & FormConfig;

const Form = ({ children, submitHandler, defaultValues, resolver, className }: FormProps) => {
  const formConfig: FormConfig = {};

  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;
  if (!!resolver) formConfig["resolver"] = resolver;

  const methods = useForm<FormProps>(formConfig);

  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
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
