import React from "react";
import { ProductType } from "../../data/ProductType";
import styled from "styled-components";

const ProductWrapper = styled.div`
  max-width: 280px;
`;

const ProductImage = styled.img`
  min-height: 280px;
`;

const ProductName = styled.p`
  font-size: 20px;
  margin: 0.8rem 0;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: 900;
  margin: 0.8rem 0;
`;

export const Product: React.FC<ProductType> = ({ src, name, price }) => {
  return (
    <ProductWrapper>
      <ProductImage src={src} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>{price.toFixed(2)} zł</ProductPrice>
    </ProductWrapper>
  );
};
