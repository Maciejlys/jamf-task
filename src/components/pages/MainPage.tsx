import React from "react";
import { Container } from "../../GlobalStyles";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import { MainContent } from "../organisms/MainContent";

interface MainPageProps {}

export const MainPage: React.FC<MainPageProps> = () => {
  return (
    <Container>
      <Header />
      <MainContent />
      <Footer />
    </Container>
  );
};
