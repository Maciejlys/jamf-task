import React from "react";
import styled from "styled-components";

interface TitleProps {
  size: number;
  children: React.ReactNode;
}

interface TitleStyleProps {
  size: number;
}

export const TitleStyle = styled.h1<TitleStyleProps>`
  font-size: ${(props) => props.size}px;
  font-family: "Antonio", sans-serif;
`;

export const Title: React.FC<TitleProps> = ({ size, children }) => {
  return <TitleStyle size={size}>{children}</TitleStyle>;
};
