import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { RegularForm } from '../../shared/forms/RegularForm/RegularForm';
import { Button } from '../../shared/button/Button';
import { FormInputField } from '../../shared/forms/FormInputField/FormInputField';

import { SignInSchema, SignInSchemaType } from './signin-schema';

export const SignInForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    shouldUnregister: true,
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = (data: SignInSchemaType) => {
    console.log(data);
    reset();
  };

  return (
    <RegularForm title="Войти" onSubmit={handleSubmit(onSubmit)}>
      <FormInputField name="email" register={register} type="email" errors={errors.email}>
        Email
      </FormInputField>
      <FormInputField name="password" register={register} type="password" errors={errors.password}>
        Пароль
      </FormInputField>
      <Button type="submit">Войти</Button>
    </RegularForm>
  );
};
