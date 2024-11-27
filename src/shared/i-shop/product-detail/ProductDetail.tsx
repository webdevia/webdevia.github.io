import React from 'react';
import { Description } from '../../description/Description';
import { AddToCart } from '../add-to-cart/AddToCart';
import { Image } from '../../image/Image';
import { MT15 } from '../../mt15/MT15';
import { ProductContainer } from '../product-container/ProductContainer';
import { Product, ProductProps } from '../product/Product';
import s from './ProductDetail.module.scss';

type ProductDetailProps = ProductProps & {
  images: string[];
  category: string;
  description: string;
};

export const ProductDetail = (data: ProductDetailProps) => (
  <ProductContainer>
    <div className={s['product-category']}>{data.category}</div>
    <div className={s['product-images']}>
      {data.images.map((image, index) => (
        <Image url={image} title={`${data.title} ${index ? index : ''}`.trim()} />
      ))}
    </div>
    <Product {...data} />
    <Description description={data.description} />
    <MT15>
      <AddToCart quantity={0} />
    </MT15>
  </ProductContainer>
);
