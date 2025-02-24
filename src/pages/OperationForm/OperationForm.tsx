import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { RegularForm } from '../../shared/forms/RegularForm/RegularForm';
import { Button } from '../../shared/button/Button';
import { FormInputField } from '../../shared/forms/FormInputField/FormInputField';
import { FormSelectField, SelectOptionProps } from '../../shared/forms/FormSelectField/FormSelectField';

import { OperationSchemaType, OperationSchema } from './operation-schema';

const costOperationOption: SelectOptionProps = {
  text: 'Cost',
  value: 'Cost',
};

const profitOperationOption: SelectOptionProps = {
  text: 'Profit',
  value: 'Profit',
};

export const OperationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OperationSchemaType>({
    shouldUnregister: true,
    resolver: zodResolver(OperationSchema),
  });

  const onSubmit = (data: OperationSchemaType) => {
    console.log(data);
  };

  return (
    <RegularForm onSubmit={handleSubmit(onSubmit)}>
      <RegularForm.Title>Операция</RegularForm.Title>
      <FormSelectField
        name="type"
        options={[costOperationOption, profitOperationOption]}
        register={register}
        errors={errors.type}
      >
        Тип операции
      </FormSelectField>
      <FormInputField name="name" register={register} type="text" errors={errors.name}>
        Название
      </FormInputField>
      <FormInputField name="category" register={register} type="text" errors={errors.category}>
        Категория
      </FormInputField>
      <FormInputField name="desc" register={register} type="text" errors={errors.desc}>
        Описание
      </FormInputField>
      <FormInputField name="createdAt" register={register} type="date" errors={errors.createdAt}>
        Дата
      </FormInputField>
      <FormInputField name="amount" register={register} isNumber={true} type="number" errors={errors.amount}>
        Сумма
      </FormInputField>

      <Button type="submit">Сохранить</Button>
    </RegularForm>
  );
};
