import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { RegularForm } from '../../shared/forms/RegularForm/RegularForm';
import { Button } from '../../shared/button/Button';
import { FormInputField } from '../../shared/forms/FormInputField/FormInputField';

import { SignUpSchemaType, SignUpSchema } from './signup-schema';

export const SignUpForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    shouldUnregister: true,
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data: SignUpSchemaType) => {
    console.log(data);
    reset();
  };

  return (
    <RegularForm title="Зарегистрироваться" onSubmit={handleSubmit(onSubmit)}>
      <FormInputField name="email" register={register} type="email" errors={errors.email}>
        Email
      </FormInputField>
      <FormInputField name="password" register={register} type="password" errors={errors.password}>
        Пароль
      </FormInputField>
      <Button type="submit">Зарегистрироваться</Button>
    </RegularForm>
  );
};
