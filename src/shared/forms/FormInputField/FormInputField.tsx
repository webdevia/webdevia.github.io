import React, { ReactNode } from 'react';
import { FieldError, UseFormRegister, Path, FieldValues } from 'react-hook-form';
import cn from 'clsx';
import s from './FormInputField.module.scss';

type FormInputFieldProps<T extends FieldValues> = {
  children: ReactNode;
  type: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  isNumber?: boolean;
  errors?: FieldError;
};

export const FormInputField = <T extends FieldValues>({
  children,
  type,
  register,
  isNumber,
  name,
  errors,
}: FormInputFieldProps<T>) => (
  <div className={s.container}>
    <label className={s.label}>{children}</label>
    <input
      className={cn(s.input, { [s.error]: errors })}
      type={type}
      {...register(name, { valueAsNumber: isNumber })}
    />
    {errors && <span className={s['error-message']}>{errors.message}</span>}
  </div>
);
