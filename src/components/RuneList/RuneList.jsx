import { useState } from "react";
import PropTypes from "prop-types";

import { findCraftableRunewords } from "../../scripts/availableRunewords";
import allRunewords from "../../data/runewords.json";

import {
  Container,
  Wrapper,
  Label,
  Input,
  RuneWrapper,
  InputContainer,
  SpinnerButton,
  ButtonWrapper,
  Button,
} from "./styles";

import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";

const Rune = ({ rune, setRuneCount, runecolor }) => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    const runeAmount = value + 1;
    setValue(runeAmount);
    setRuneCount((prev) => ({ ...prev, [rune]: parseInt(runeAmount) }));
  };

  const handleDecrement = () => {
    const runeAmount = Math.max(value - 1, 0);
    setValue(runeAmount);
    setRuneCount((prev) => ({ ...prev, [rune]: parseInt(runeAmount) }));
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    setRuneCount((prev) => ({ ...prev, [rune]: parseInt(newValue) }));
    if (newValue === "") {
      setRuneCount((prev) => ({ ...prev, [rune]: parseInt(0) }));
      setValue("");
    } else {
      setValue(parseInt(newValue));
    }
  };

  return (
    <RuneWrapper>
      <Label runecolor={runecolor}>{rune}</Label>
      <InputContainer>
        <SpinnerButton onClick={handleDecrement}>-</SpinnerButton>
        <Input type="number" value={value} onChange={handleChange} />
        <SpinnerButton onClick={handleIncrement}>+</SpinnerButton>
      </InputContainer>
    </RuneWrapper>
  );
};

Rune.propTypes = {
  rune: PropTypes.string,
  setRuneCount: PropTypes.func,
  runecolor: PropTypes.string,
};

export const RuneList = ({ setAvailableRunewords }) => {
  const [runeCount, setRuneCount] = useState({});

  const handleFindRuneword = () => {
    const craftableRunewords = findCraftableRunewords(runeCount, allRunewords);
    setAvailableRunewords(craftableRunewords);
    console.log(craftableRunewords);
  };

  const commonRunes = [
    "Ol",
    "Tor",
    "Eth",
    "Tul",
    "Ert",
    "Ymn",
    "Thal",
    "Old",
    "Naf",
    "Uth",
    "Rex",
    "Sal",
  ];
  const uncommonRunes = ["Nut", "Hel", "Lum", "Fel", "Del", "Io", "Co"];

  const redRunes = ["Lem", "Pul", "Mal", "Gul", "Um", "Ist", "Vex"];

  const rareRunes = ["Qi", "Sur", "Jah", "Xo", "Ber", "Drax", "Zed"];

  return (
    <>
      <Container>
        <Wrapper>
          {commonRunes.map((rune) => (
            <Rune
              key={rune}
              rune={rune}
              setRuneCount={setRuneCount}
              runecolor="#ffff"
            />
          ))}
        </Wrapper>
        <Wrapper>
          {uncommonRunes.map((rune) => (
            <Rune
              key={rune}
              rune={rune}
              setRuneCount={setRuneCount}
              runecolor="#f2b6b6"
            />
          ))}
        </Wrapper>
        <Wrapper>
          {redRunes.map((rune) => (
            <Rune
              key={rune}
              rune={rune}
              setRuneCount={setRuneCount}
              runecolor="#de6868"
            />
          ))}
        </Wrapper>
        <Wrapper>
          {rareRunes.map((rune) => (
            <Rune
              key={rune}
              rune={rune}
              setRuneCount={setRuneCount}
              runecolor="#68dec0"
            />
          ))}
        </Wrapper>
      </Container>
      <ButtonWrapper>
        <Button onClick={handleFindRuneword}>Find Runewords</Button>
        <Checkbox color="white">Test</Checkbox>
      </ButtonWrapper>
    </>
  );
};

RuneList.propTypes = {
  setAvailableRunewords: PropTypes.func,
};
