import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 1180px;
  margin: 0 auto;
`;

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

img {
  max-width: 100%;
}

* {
    -webkit-tap-highlight-color: transparent;
}
`;
