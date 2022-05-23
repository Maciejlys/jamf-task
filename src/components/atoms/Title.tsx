import React from "react";
import styled from "styled-components";

interface TitleProps {
  size: number;
  children: React.ReactNode;
}

interface TitleStyleProps {
  size: number;
}

const TitleStyle = styled.h1<TitleStyleProps>`
  margin-top: 20%;
  font-family: "Antonio", sans-serif;
  font-size: ${(props) => props.size}px;

  @media (max-width: 1200px) {
    font-size: ${(props) => props.size * 0.8}px;
  }

  @media (max-width: 1000px) {
    font-size: ${(props) => props.size * 0.6}px;
    margin-top: 10%;
  } ;
`;

const Center = styled.div`
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
  } ;
`;

export const Title: React.FC<TitleProps> = ({ size, children }) => {
  return (
    <Center>
      <TitleStyle size={size}>{children}</TitleStyle>
    </Center>
  );
};
