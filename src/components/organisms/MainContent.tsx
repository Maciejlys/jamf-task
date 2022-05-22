import React from "react";
import { MainPhoto } from "../molecules/MainPhoto";
import styled from "styled-components";

interface MainConentProps {}

export const MainContentWrapper = styled.div`
  display: flex;
`;

export const MainContent: React.FC<MainConentProps> = () => {
  return (
    <MainContentWrapper>
      <MainPhoto />
    </MainContentWrapper>
  );
};
