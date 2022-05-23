import React from "react";
import { Title } from "../atoms/Title";
import styled from "styled-components";
import { Information } from "../molecules/Information";
import { ProductsList } from "./ProductsList";

interface RightColumnProps {}

export const RightColumnWrapper = styled.div`
  margin-top: 10%;
`;

export const RightColumn: React.FC<RightColumnProps> = () => {
  return (
    <RightColumnWrapper>
      <Title size={64}>Zadanie rekrtuacyjne na staż w Jamf</Title>
      <Information />
      <Title size={32}>Urządzenia Apple</Title>
      <ProductsList />
    </RightColumnWrapper>
  );
};
