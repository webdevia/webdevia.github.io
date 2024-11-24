import React from 'react';
import { ProductDetail as ProductDetailProps } from './product.types';
import { ProductContainer } from './ProductContainer';
import { Product } from './Product';
import { Description } from '../description/Description';
import { AddToCart } from './AddToCart';
import { Image } from '../image/Image';
import { MT15 } from '../mt15/MT15';
import s from './ProductDetail.module.scss';

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
