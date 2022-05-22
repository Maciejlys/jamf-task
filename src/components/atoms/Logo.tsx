import React from "react";
import styled from "styled-components";

interface LogoProps {
  size: number;
  src?: string;
}

export const LogoWrapper = styled.div<LogoProps>`
  ${({ size }) => `width: ${size}px;`}
`;

export const Logo: React.FC<LogoProps> = ({ size, src }) => {
  return (
    <LogoWrapper size={size}>
      <img src={src} alt="jamf logo" />
    </LogoWrapper>
  );
};
