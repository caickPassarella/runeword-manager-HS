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

export const Input = styled.input`
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  opacity: 75%;
  padding-left: 20px;
  outline: none;
  color: #ffff;
  font-size: 18px;
  text-align: left;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  color: #ffff;
  padding-bottom: 10px;
  gap: 20px;
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
  &:hover {
    transition: 300ms;
    transform: translateY(-0px);
    color: #242322;
    background-color: #ffff;
    border: solid 1px #bfbfbf;
  }
`;

export const ClearButton = styled(Button)`
  padding: 10px;
  &:hover {
    transition: 300ms;
    transform: translateY(-0px);
    color: #242322;
    background-color: #ffff;
    border: solid 1px #bfbfbf;
  }
`;
