import React from "react";
import { Container } from "../../GlobalStyles";
import { TextInput } from "../molecules/TextInput";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

interface MainPageProps {}

export const MainPage: React.FC<MainPageProps> = () => {
  return (
    <Container>
      <Header />
      <TextInput label={"Nazwa produktu"} setter={() => {}} />
      <Footer />
    </Container>
  );
};
