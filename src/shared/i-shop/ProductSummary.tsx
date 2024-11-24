import React from 'react';
import { ProductSummary as ProductSummaryProps } from './product.types';
import { ProductContainer } from './ProductContainer';
import { Product } from './Product';
import { Description } from '../description/Description';
import { AddToCart } from './AddToCart';
import { Image } from '../image/Image';
import { MT15 } from '../mt15/MT15';

export const ProductSummary = (data: ProductSummaryProps) => (
  <ProductContainer>
    <Image url={data.image} title={data.title} />
    <Product {...data} />
    <Description description={data.shortDescription} isShort={true} />
    <MT15>
      <AddToCart quantity={0} />
    </MT15>
  </ProductContainer>
);
