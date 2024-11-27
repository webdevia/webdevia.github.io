import React from 'react';
import { Button } from '../../button/Button';
import { Product, ProductProps } from '../product/Product';
import s from './ProductCart.module.scss';

const DeleteButton = () => <Button disabled={true}>Удалить</Button>;

type ProductCartProps = {
  product: ProductProps;
};

export const ProductCart = ({ product }: ProductCartProps) => (
  <div className={s['product-cart']}>
    <Product {...product} />
    <DeleteButton />
  </div>
);
