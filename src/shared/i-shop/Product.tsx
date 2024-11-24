import React from 'react';
import { Product as ProductProps } from './product.types';
import s from './Product.module.scss';

export const Product = (data: ProductProps) => (
  <>
    <h2 className={s['product-title']}>{data.title}</h2>
    <p className={s['product-price']}>{`Цена: ${data.price} ₽`}</p>
  </>
);
