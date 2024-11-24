import React from 'react';
import { ProductContainer as ProductContainerProps } from './product.types';
import s from './ProductContainer.module.scss';

export const ProductContainer = ({ children }: ProductContainerProps) => (
  <div className={s['product-container']}>{children}</div>
);
