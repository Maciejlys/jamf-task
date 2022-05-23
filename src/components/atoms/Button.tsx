import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const ButtonStyle = styled.button`
  font-size: 18px;
  font-weight: 900;
  padding: 1.1rem 1rem;
  background-color: #c4c4c4;
  outline: none;
  border: none;
  :hover {
    background-color: #b3b3b3;
  }
`;

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};
