import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks";
import { toggleModal } from "../../features/modal/modalSlice";
import { OnHoverZoom } from "../../utils/animations/motions";
import { Button } from "../atoms/Button";

const InformationWraper = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  max-width: 550px;
  padding: 3rem;
  margin: 0 auto;

  @media (min-width: 900px) {
    left: -10.5%;
    width: 110.5%;
    max-width: 640px;
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
  const dispatch = useAppDispatch();
  return (
    <OnHoverZoom>
      <InformationWraper>
        <Paragraph>
          Poniżej wyświetlana jest lista produktów. Twoim zadaniem jest
          stworzenie mechanizmu, który będzie dodawał nowy produkt do listy.
          Powodzenia!
        </Paragraph>
        <Button onClick={() => dispatch(toggleModal())}>
          Dodaj nowy produkt
        </Button>
      </InformationWraper>
    </OnHoverZoom>
  );
};
