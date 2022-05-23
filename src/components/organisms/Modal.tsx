import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleModal } from "../../features/modal/modalSlice";
import { AvailableFonts } from "../../utils/availableFonts";
import { ExitIcon } from "../atoms/ExitIcon";
import { Title } from "../atoms/Title";
import { InputForm } from "../molecules/InputForm";

interface ModalProps {
  isOpen: boolean;
}

const ModalWrapper = styled.div<ModalProps>`
  position: fixed;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding: 2rem 4rem;
  width: 100%;
  max-width: 640px;
  background-color: white;
  right: 0;
  height: 100%;
  z-index: 10;
  box-shadow: -5px 0px 10px 1px #c9c9c9;
`;

const ExitButtonPosition = styled.div`
  margin-left: 100%;
`;

export const Modal: React.FC = () => {
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const dispatch = useAppDispatch();
  return (
    <ModalWrapper isOpen={isOpen}>
      <ExitButtonPosition>
        <ExitIcon size={24} onClick={() => dispatch(toggleModal())} />
      </ExitButtonPosition>
      <Title font={AvailableFonts.OpenSans} size={32}>
        Dodawanie produktu
      </Title>
      <InputForm />
    </ModalWrapper>
  );
};
