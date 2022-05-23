import React from "react";
import { Title } from "../atoms/Title";
import styled from "styled-components";
import { Information } from "../molecules/Information";
import { ProductsList } from "./ProductsList";
import { AvailableFonts } from "../../utils/availableFonts";

interface RightColumnProps {}

export const RightColumnWrapper = styled.div`
  margin-top: 10%;
`;

export const RightColumn: React.FC<RightColumnProps> = () => {
  return (
    <RightColumnWrapper>
      <Title size={64} font={AvailableFonts.Antonio}>
        Zadanie rekrtuacyjne na staż w Jamf
      </Title>
      <Information />
      <Title size={32} font={AvailableFonts.OpenSans}>
        Urządzenia Apple
      </Title>
      <ProductsList />
    </RightColumnWrapper>
  );
};
