import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { RegularForm } from '../../shared/forms/RegularForm/RegularForm';
import { Button } from '../../shared/button/Button';
import { FormInputField } from '../../shared/forms/FormInputField/FormInputField';

import { ProductSchema, ProductSchemaType } from './product-schema';

export const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductSchemaType>({
    shouldUnregister: true,
    resolver: zodResolver(ProductSchema),
  });

  const onSubmit = (data: ProductSchemaType) => {
    console.log(data);
  };

  return (
    <RegularForm title="Товар" onSubmit={handleSubmit(onSubmit)}>
      <FormInputField name="name" register={register} type="text" errors={errors.name}>
        Название
      </FormInputField>
      <FormInputField name="category" register={register} type="text" errors={errors.category}>
        Категория
      </FormInputField>
      <FormInputField name="desc" register={register} type="text" errors={errors.desc}>
        Описание
      </FormInputField>
      <FormInputField name="photo" register={register} type="text" errors={errors.photo}>
        Фото
      </FormInputField>
      <FormInputField name="createdAt" register={register} type="date" errors={errors.createdAt}>
        Дата
      </FormInputField>
      <FormInputField name="oldPrice" register={register} isNumber={true} type="number" errors={errors.oldPrice}>
        Старая цена
      </FormInputField>
      <FormInputField name="price" register={register} isNumber={true} type="number" errors={errors.price}>
        Цена
      </FormInputField>
      <Button type="submit">Сохранить</Button>
    </RegularForm>
  );
};
