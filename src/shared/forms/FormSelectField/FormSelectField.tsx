import React, { ReactNode } from 'react';
import { FieldError, UseFormRegister, Path, FieldValues } from 'react-hook-form';
import cn from 'clsx';
import s from './FormSelectField.module.scss';

export type SelectOptionProps = {
  text: string;
  value: string;
};

const SelectOption = ({ text, value }: SelectOptionProps) => <option value={value}>{text}</option>;

type FormSelectFieldProps<T extends FieldValues> = {
  children: ReactNode;
  register: UseFormRegister<T>;
  options: SelectOptionProps[];
  name: Path<T>;
  errors?: FieldError;
};

export const FormSelectField = <T extends FieldValues>({
  children,
  register,
  options,
  name,
  errors,
}: FormSelectFieldProps<T>) => (
  <div className={s.container}>
    <label className={s.label}>{children}</label>
    <select className={cn(s.select, { [s.error]: errors })} {...register(name)}>
      {options.map((option, index) => (
        <SelectOption key={index} {...option} />
      ))}
    </select>
    {errors && <span className={s['error-message']}>{errors.message}</span>}
  </div>
);
