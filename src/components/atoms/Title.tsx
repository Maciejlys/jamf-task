import React from "react";
import styled from "styled-components";

interface TitleProps {
  size: number;
  font: string;
  children?: React.ReactNode;
}

const TitleStyle = styled.h1<TitleProps>`
  margin-top: 20%;
  font-family: ${({ font }) => font}, sans-serif;
  font-size: ${({ size }) => size}px;

  @media (max-width: 1200px) {
    font-size: ${({ size }) => size * 0.8}px;
  }

  @media (max-width: 1000px) {
    font-size: ${({ size }) => size * 0.6}px;
    margin-top: 10%;
  } ;
`;

const Center = styled.div`
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
  } ;
`;

export const Title: React.FC<TitleProps> = ({ size, children, font }) => {
  return (
    <Center>
      <TitleStyle font={font} size={size}>
        {children}
      </TitleStyle>
    </Center>
  );
};
