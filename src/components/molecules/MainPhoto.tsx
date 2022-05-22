import React from "react";
import styled from "styled-components";

const MainContentWrapper = styled.div`
  display: flex;
  max-width: 680px;
`;

const WhiteBg = styled.div`
  width: 15%;
  background-color: #fff;
`;

const DarkBg = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #e1e5ea;
`;

const MainPhotoImg = styled.img`
  position: relative;
  max-height: 85%;
  left: -15%;
`;

export const MainPhoto: React.FC = () => {
  return (
    <MainContentWrapper>
      <WhiteBg />
      <DarkBg>
        <MainPhotoImg src={require("../../assets/photo.png")} />
      </DarkBg>
    </MainContentWrapper>
  );
};
