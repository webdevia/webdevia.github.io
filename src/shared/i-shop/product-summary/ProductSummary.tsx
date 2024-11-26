import React from 'react';
import { Image } from '../../image/Image';
import { MT15 } from '../../mt15/MT15';
import { Description } from '../../description/Description';
import { ProductContainer } from '../product-container/ProductContainer';
import { Product, ProductProps } from '../product/Product';
import { AddToCart } from '../add-to-cart/AddToCart';

type ProductSummaryProps = ProductProps & {
  image: string;
  shortDescription: string;
};

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
