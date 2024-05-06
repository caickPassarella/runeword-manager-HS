import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import {
  Label,
  Input,
  RuneWrapper,
  InputContainer,
  SpinnerButton,
} from "./styles";

export const Rune = ({
  rune,
  setRuneCount,
  runecolor,
  shouldHighlight,
  clearRunes,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(0);
    setRuneCount({});
  }, [clearRunes, setRuneCount]);

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
      <Label $highlight={shouldHighlight} $runecolor={runecolor}>
        {rune}
      </Label>
      <InputContainer $highlight={shouldHighlight}>
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
  shouldHighlight: PropTypes.bool,
  clearRunes: PropTypes.number,
};
