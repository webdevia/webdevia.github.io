import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  ChangeProfileSchema,
  ChangeProfileSchemaType,
  ChangePasswordSchema,
  ChangePasswordSchemaType,
} from './profile-schema';
import { RegularForm } from '../../shared/forms/RegularForm/RegularForm';
import { FormInputField } from '../../shared/forms/FormInputField/FormInputField';
import { FormTextareaField } from '../../shared/forms/FormTextareaField/FormTextareaField';
import { Button } from '../../shared/button/Button';

import s from './ProfileForm.module.scss';

const ChangeProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeProfileSchemaType>({
    shouldUnregister: true,
    resolver: zodResolver(ChangeProfileSchema),
  });

  const onSubmit = (data: ChangeProfileSchemaType) => {
    console.log(data);
  };

  return (
    <RegularForm title="Изменить профиль" onSubmit={handleSubmit(onSubmit)}>
      <FormInputField name="name" register={register} type="text" errors={errors.name}>
        Псевдоним
      </FormInputField>
      <FormTextareaField name="description" register={register} errors={errors.description}>
        О себе
      </FormTextareaField>
      <Button type="submit">Сохранить</Button>
    </RegularForm>
  );
};

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordSchemaType>({
    shouldUnregister: true,
    resolver: zodResolver(ChangePasswordSchema),
  });

  const onSubmit = (data: ChangePasswordSchemaType) => {
    console.log(data);
  };

  return (
    <RegularForm title="Изменить пароль" onSubmit={handleSubmit(onSubmit)}>
      <FormInputField name="password" register={register} type="password" errors={errors.password}>
        Пароль
      </FormInputField>
      <FormInputField name="newPassword" register={register} type="password" errors={errors.newPassword}>
        Новый пароль
      </FormInputField>
      <FormInputField name="confirmPassword" register={register} type="password" errors={errors.confirmPassword}>
        Повторите пароль
      </FormInputField>
      <Button type="submit">Изменить</Button>
    </RegularForm>
  );
};

export const ProfileForm = () => (
  <div className={s.container}>
    <ChangeProfileForm />
    <ChangePasswordForm />
  </div>
);
