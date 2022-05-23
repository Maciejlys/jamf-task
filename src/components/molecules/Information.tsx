import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";

const InformationWraper = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  padding: 3rem;
  max-width: 640px;
  margin: 0 auto;

  @media (min-width: 900px) {
    left: -10.5%;
    width: 110.5%;
  }
  @media (max-width: 468px) {
    padding: 3rem 0;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 3rem;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

export const Information: React.FC = () => {
  return (
    <InformationWraper>
      <Paragraph>
        Poniżej wyświetlana jest lista produktów. Twoim zadaniem jest stworzenie
        mechanizmu, który będzie dodawał nowy produkt do listy. Powodzenia!
      </Paragraph>
      <Button onClick={() => {}}>Dodaj nowy produkt</Button>
    </InformationWraper>
  );
};
