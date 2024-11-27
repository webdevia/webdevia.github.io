import type { Meta } from '@storybook/react';

import { ProductCart } from '../shared/i-shop/product-cart/ProductCart';

const meta: Meta<typeof ProductCart> = {
  component: ProductCart,
  title: 'Интернет-магазин/Товар для корзины',
  tags: ['autodocs'],
};

export default meta;

export const Test = {
  args: {
    product: {
      title: 'TEST Title',
      price: 999.99,
    },
  },
};
