import React, { useState } from "react";
import { TextInput } from "./TextInput";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { useAppDispatch } from "../../app/hooks";
import { addNewProduct } from "../../features/products/productsSlice";
import { toggleModal } from "../../features/modal/modalSlice";
import { intParser } from "../../utils/inputUtils";

export const InputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputForm: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [src, setSrc] = useState("");
  const dispatch = useAppDispatch();

  const clearInputs = () => {
    setName("");
    setPrice("");
    setSrc("");
  };

  const ButtonHandler = () => {
    const newProduct = {
      name,
      price: intParser(price),
      src,
    };
    dispatch(addNewProduct(newProduct));
    dispatch(toggleModal());
    clearInputs();
  };
  return (
    <InputFormWrapper>
      <TextInput
        label="Nazwa produktu"
        value={name}
        setter={setName}></TextInput>
      <TextInput
        label="Cena produktu"
        value={price}
        setter={setPrice}></TextInput>
      <TextInput
        label="Adres URL obrazka"
        value={src}
        setter={setSrc}></TextInput>
      <Button onClick={ButtonHandler}>Dodaj produkt</Button>
    </InputFormWrapper>
  );
};
