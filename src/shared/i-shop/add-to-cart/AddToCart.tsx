import React from 'react';
import { Button } from '../../button/Button';
import s from './AddToCart.module.scss';

type AddToCartProps = {
  quantity: number;
};

const AddToCartEdit = ({ quantity }: AddToCartProps) => (
  <div className={s['quantity-container']}>
    <Button disabled={true}>-</Button>
    <input type="text" className={s['quantity-input']} value={quantity} />
    <Button disabled={true}>+</Button>
  </div>
);

export const AddToCart = ({ quantity }: AddToCartProps) =>
  quantity > 0 ? <AddToCartEdit quantity={quantity} /> : <Button disabled={true}>В корзину</Button>;
