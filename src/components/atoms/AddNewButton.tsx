import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks";
import { toggleModal } from "../../features/modal/modalSlice";

interface AddNewButonProps {
  onClick: () => void;
  size: number;
}

interface TextProps {
  size: number;
}

const Text = styled.h4<TextProps>`
  ${({ size }) => `font-size: ${size}px;`}
  font-weight: 600;
  @media (max-width: 468px) {
    display: none;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const AddNewButton: React.FC<AddNewButonProps> = ({ onClick, size }) => {
  const dispatch = useAppDispatch();
  return (
    <ButtonWrapper onClick={() => dispatch(toggleModal())}>
      <Text size={size}>Dodaj nowy produkt</Text>
      <AiOutlinePlusCircle size={size + 5} />
    </ButtonWrapper>
  );
};
