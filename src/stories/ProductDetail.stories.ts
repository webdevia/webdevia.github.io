import type { Meta } from '@storybook/react';

import { ProductDetail } from '../shared/i-shop/product-detail/ProductDetail';

const meta: Meta<typeof ProductDetail> = {
  component: ProductDetail,
  title: 'Интернет-магазин/Полное отображение',
  tags: ['autodocs'],
};

export default meta;

export const Test = {
  args: {
    title: 'TEST Title',
    price: 999.99,
    category: 'овощи',
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus omnis tempore cupiditate magni ad porro nihil consectetur a voluptas, rerum error, maiores rem, ut adipisci sint? Esse excepturi at non?',
  },
};
