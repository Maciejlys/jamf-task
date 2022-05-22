import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 1500px;
  margin: 0 auto;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  /* font-family: 'Antonio', sans-serif; */
  font-family: 'Open Sans', sans-serif;
  font-size: 1.3rem;
}

img {
  max-width: 100%;
}
`;
