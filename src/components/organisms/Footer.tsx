import React from "react";
import styled from "styled-components";
import { Logo } from "../atoms/Logo";

const FooterWrapper = styled.div`
  border-top: 1px solid #000;
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 0;
  align-items: center;
  margin-top: 10rem;
`;

const Text = styled.h4`
  font-weight: 200;
  font-size: 12px;
  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 468px) {
    font-size: 8px;
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Text>©2022 Jamf. Wszelkie prawa zastrzeone.</Text>
      <a href="https://www.linkedin.com/company/jamf-software/" target="_blank">
        <Logo src={require("../../assets/linkedin-logo.png")} size={100} />
      </a>
    </FooterWrapper>
  );
};
