import React from "react";
import { MainPhoto } from "../molecules/MainPhoto";
import styled from "styled-components";
import { RightColumn } from "./RightColumn";

interface MainConentProps {}

const MainContentWrapper = styled.div`
  margin-top: 2rem;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  width: 100%;
`;

export const MainContent: React.FC<MainConentProps> = () => {
  return (
    <MainContentWrapper>
      <Row>
        <Col>
          <MainPhoto />
        </Col>
        <Col>
          <RightColumn />
        </Col>
      </Row>
    </MainContentWrapper>
  );
};
