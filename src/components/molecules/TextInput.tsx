import React, { useState } from "react";
import styled from "styled-components";

interface TextInputProps {
  setter: (input: string) => void;
  label: string;
  value: string;
}

const TextInputWrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.3rem 0;
`;

const Required = styled.span`
  font-size: 14px;
  color: #a5a5a5;
`;

const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  font-size: 24px;
  height: 56px;
  padding: 0.5rem;
  border: 1px solid #888;
  outline: none;

  :focus {
    border: 2px solid #000;
  }
`;

export const TextInput: React.FC<TextInputProps> = ({
  label,
  setter,
  value,
}) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setter(newValue);
  };
  return (
    <TextInputWrapper>
      <Header>
        <InputLabel>{label}</InputLabel>
        <Required>Pole wymagane</Required>
      </Header>

      <Input type="text" placeholder="" value={value} onChange={handleChange} />
    </TextInputWrapper>
  );
};
