import React from "react";
import { ImCross } from "react-icons/im";
import styled from "styled-components";

interface ExitIconProps {
  onClick: () => void;
  size: number;
}

const ExitIconWrapper = styled.div`
  cursor: pointer;
`;

export const ExitIcon: React.FC<ExitIconProps> = ({ size, onClick }) => {
  return (
    <ExitIconWrapper onClick={onClick}>
      <ImCross size={size} />
    </ExitIconWrapper>
  );
};
