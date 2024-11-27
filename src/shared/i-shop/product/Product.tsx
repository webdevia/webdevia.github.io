import React from 'react';
import s from './Product.module.scss';

export type ProductProps = {
  title: string;
  price: number;
};

export const Product = (data: ProductProps) => (
  <>
    <h2 className={s['product-title']}>{data.title}</h2>
    <p className={s['product-price']}>{`Цена: ${data.price} ₽`}</p>
  </>
);
