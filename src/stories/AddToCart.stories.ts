import type { Meta } from '@storybook/react';

import { AddToCart } from '../shared/i-shop/add-to-cart/AddToCart';

const meta: Meta<typeof AddToCart> = {
  component: AddToCart,
  title: 'Интернет-магазин/В корзину',
  tags: ['autodocs'],
};

export default meta;

export const Test = {
  args: {
    quantity: 5,
  },
};
