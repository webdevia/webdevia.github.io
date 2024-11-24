import React from 'react';
import { ProductCart as ProductCartProps } from './product.types';
import { Product } from './Product';
import { Button } from '../button/Button';
import s from './ProductCart.module.scss';

const DeleteButton = () => <Button disabled={true}>Удалить</Button>;

export const ProductCart = ({ product }: ProductCartProps) => (
  <div className={s['product-cart']}>
    <Product {...product} />
    <DeleteButton />
  </div>
);
