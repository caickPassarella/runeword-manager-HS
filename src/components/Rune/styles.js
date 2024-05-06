import { styled } from "styled-components";

export const Label = styled.label`
  color: ${(props) => props.$runecolor || "#ffff"};
  font-weight: ${(props) => (props.$highlight ? 800 : 300)};
  letter-spacing: 1px;
`;

export const Input = styled.input`
  width: 28px;
  height: 28px;
  border: none;
  outline: none;
  color: #ffff;
  text-align: center;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SpinnerButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  color: #ffff;
  cursor: pointer;
  &:hover {
    opacity: 90%;
  }
`;

export const RuneWrapper = styled.div`
  padding: 8px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: ${(props) =>
    props.$highlight ? "1px solid #ffffff" : "1px solid #424242"};
  border-radius: 2px;
`;
