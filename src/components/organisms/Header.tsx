import React from "react";
import { Logo } from "../atoms/Logo";
import { AddNewButton } from "../atoms/AddNewButton";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo src={require("../../assets/jamf-logo.png")} size={100} />
      <AddNewButton size={20} onClick={() => console.log("working")} />
    </HeaderWrapper>
  );
};
