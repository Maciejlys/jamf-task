import React from "react";
import { Container } from "../../GlobalStyles";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import { MainContent } from "../organisms/MainContent";
import { Modal } from "../organisms/Modal";

interface MainPageProps {}

export const MainPage: React.FC<MainPageProps> = () => {
  return (
    <Container>
      <Modal />
      <Header />
      <MainContent />
      <Footer />
    </Container>
  );
};
