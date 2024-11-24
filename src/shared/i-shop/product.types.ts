import { ReactNode } from 'react';

export type Product = {
  title: string;
  price: number;
};

export type ProductContainer = {
  children: ReactNode;
};

export type ProductSummary = Product & {
  image: string;
  shortDescription: string;
};

export type ProductDetail = Product & {
  images: string[];
  category: string;
  description: string;
};

export type ProductCart = {
  product: Product;
};
