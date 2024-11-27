import React, { ReactNode } from 'react';
import s from './ProductContainer.module.scss';

type ProductContainerProps = {
  children: ReactNode;
};

export const ProductContainer = ({ children }: ProductContainerProps) => (
  <div className={s['product-container']}>{children}</div>
);
