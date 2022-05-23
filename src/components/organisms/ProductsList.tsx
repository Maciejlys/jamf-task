import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectProducts } from "../../features/products/productsSlice";
import { Product } from "../molecules/Product";
import styled from "styled-components";
import { motion } from "framer-motion";
import { projectContainer } from "../../utils/animations/variants";

export const ProductsListWrapper = styled(motion.div)`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem 1rem;
  @media (max-width: 900px) {
    place-items: center;
  }
`;

export const ProductsList: React.FC = () => {
  const products = useAppSelector(selectProducts);
  return (
    <ProductsListWrapper
      variants={projectContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}>
      {products.map((product, i) => (
        <Product key={i} {...product} />
      ))}
    </ProductsListWrapper>
  );
};
