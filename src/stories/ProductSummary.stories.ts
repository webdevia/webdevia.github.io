import type { Meta } from '@storybook/react';

import { ProductSummary } from '../shared/i-shop/product-summary/ProductSummary';

const meta: Meta<typeof ProductSummary> = {
  component: ProductSummary,
  title: 'Интернет-магазин/Краткое отображение',
  tags: ['autodocs'],
};

export default meta;

export const Test = {
  args: {
    title: 'TEST Title',
    price: 999.99,
    image: 'https://placehold.co/600x400',
    shortDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus omnis tempore cupiditate magni ad porro nihil consectetur a voluptas, rerum error, maiores rem, ut adipisci sint? Esse excepturi at non?',
  },
};
