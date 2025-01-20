import React, { ReactNode } from 'react';
import { FieldError, UseFormRegister, Path, FieldValues } from 'react-hook-form';
import cn from 'clsx';
import s from './FormTextareaField.module.scss';

type FormTextareaFieldProps<T extends FieldValues> = {
  children: ReactNode;
  register: UseFormRegister<T>;
  name: Path<T>;
  rows?: number;
  errors?: FieldError;
};

export const FormTextareaField = <T extends FieldValues>({
  children,
  rows,
  register,
  name,
  errors,
}: FormTextareaFieldProps<T>) => (
  <div className={s.container}>
    <label className={s.label}>{children}</label>
    <textarea className={cn(s.textarea, { [s.error]: errors })} {...register(name)} rows={rows ?? 4}></textarea>
    {errors && <span className={s['error-message']}>{errors.message}</span>}
  </div>
);
