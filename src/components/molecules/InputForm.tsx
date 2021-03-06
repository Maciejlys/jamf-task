import React, { useState } from "react";
import { TextInput } from "./TextInput";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { useAppDispatch } from "../../app/hooks";
import { addNewProduct } from "../../features/products/productsSlice";
import { toggleModal } from "../../features/modal/modalSlice";
import { checkIfInputsAreValid } from "../../utils/validators/validators";

const InputsWrapper = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ErrorWrapper = styled.div`
  height: 2rem;
  margin-bottom: 2rem;
`;
const ErrorMsg = styled.p`
  color: red;
`;

export const InputForm: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [src, setSrc] = useState("");
  const [errorMsg, seterrorMsg] = useState("");
  const dispatch = useAppDispatch();

  const clearInputs = () => {
    setName("");
    setPrice("");
    setSrc("");
    seterrorMsg("");
  };

  const ButtonHandler = () => {
    try {
      checkIfInputsAreValid(name, price, src);
    } catch (error) {
      if (error instanceof Error) seterrorMsg(error.message);
      return;
    }
    const newProduct = {
      name,
      price: parseFloat(price),
      src: src.replaceAll(" ", ""),
    };
    dispatch(addNewProduct(newProduct));
    dispatch(toggleModal());
    clearInputs();
  };
  return (
    <>
      <InputsWrapper>
        <TextInput
          maxLenght={15}
          label="Nazwa produktu"
          value={name}
          setter={setName}></TextInput>
        <TextInput
          maxLenght={15}
          label="Cena produktu"
          value={price}
          setter={setPrice}></TextInput>
        <TextInput
          label="Adres URL obrazka"
          value={src}
          setter={setSrc}></TextInput>
      </InputsWrapper>
      <ErrorWrapper>
        <ErrorMsg>{errorMsg}</ErrorMsg>
      </ErrorWrapper>
      <Button onClick={ButtonHandler}>Dodaj produkt</Button>
    </>
  );
};
