import React from "react";
import { MainPhoto } from "../molecules/MainPhoto";
import styled from "styled-components";
import { RightColumn } from "./RightColumn";

const MainContentWrapper = styled.div`
  margin-top: 2rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const MainContent: React.FC = () => {
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
