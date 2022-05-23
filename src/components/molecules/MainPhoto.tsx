import React from "react";
import styled from "styled-components";

const MainContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 580px;
  align-items: flex-end;
  margin: 0 auto;
`;

const WhiteBox = styled.div`
  width: 17%;
  background-color: white;
`;

const DarkBox = styled.div`
  width: 83%;
  background-color: #e1e5ea;
`;

const MainPhotoImg = styled.img`
  margin: 17% 0;
  position: relative;
  left: -17%;
`;

export const MainPhoto: React.FC = () => {
  return (
    <MainContentWrapper>
      <WhiteBox></WhiteBox>
      <DarkBox>
        <MainPhotoImg src={require("../../assets/photo.png")} />
      </DarkBox>
    </MainContentWrapper>
  );
};
