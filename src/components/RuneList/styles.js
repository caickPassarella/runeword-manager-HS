import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 40px;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: row;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid #424242;
  border-radius: 2px;
`;

export const Label = styled.label`
  color: ${(props) => (props.runecolor ? props.runecolor : "#ffff")};
  font-weight: 200;
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

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 32px;
  color: #ffff;
`;

export const Button = styled.button`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  color: #fff;
  padding: 10px 30px;
  border: solid #bfbfbf 1px;
  box-shadow: rgb(20, 20, 20) 0px 0px 12px -2px;
  border-radius: 3px;
  transition: 300ms;
  transform: translateY(0);
  cursor: pointer;
  width: 200px;
  margin-right: 32px;
  &:hover {
    transition: 300ms;
    padding: 10px 29px;
    transform: translateY(-0px);
    color: #242322;
    background-color: #ffff;
    border: solid 1px #bfbfbf;
  }
`;
