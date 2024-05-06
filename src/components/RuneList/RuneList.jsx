import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { findCraftableRunewords } from "../../scripts/availableRunewords";

import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";

import {
  Container,
  Wrapper,
  ButtonWrapper,
  ClearButton,
  Input,
} from "./styles";
import { Rune } from "../Rune/rune";

export const RuneList = ({ setAvailableRunewords }) => {
  const [runeCount, setRuneCount] = useState({});
  const [recipeIsEnabled, setRecipeIsEnabled] = useState(false);
  const [userSearchInput, setUserSearchInput] = useState("");
  const [clearRunes, setClearRunes] = useState(0);
  const [selectedType, setSelectedType] = useState([]);

  const handleClearRunes = () => {
    setClearRunes((prev) => prev + 1); // Action to trigger a state change
    setSelectedType([]);
  };

  const handleFilterRuneword = (type, checked) => {
    if (selectedType.indexOf(type) === -1) {
      setSelectedType((prevValue) => [...prevValue, type]);
    } else if (!checked && selectedType.indexOf(type) !== -1) {
      setSelectedType((prevValue) =>
        prevValue.filter((runewordType) => runewordType !== type)
      );
    }
    console.log(selectedType);
  };

  useEffect(() => {
    const returnedRunewords = findCraftableRunewords(
      runeCount,
      recipeIsEnabled
    );
    if (selectedType.length !== 0) {
      const filteredRunewords = Object.entries(returnedRunewords).reduce(
        (newObj, [key, value]) => {
          if (selectedType.indexOf(value.type) !== -1) {
            newObj[key] = value;
          }
          return newObj;
        },
        {}
      );
      setAvailableRunewords(filteredRunewords);
      return;
    }
    setAvailableRunewords(returnedRunewords);
  }, [
    clearRunes,
    recipeIsEnabled,
    runeCount,
    setAvailableRunewords,
    selectedType,
  ]);

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

  const types = ["Weapon", "Shield", "Helmet", "Boots", "Armor"];

  return (
    <>
      <ButtonWrapper>
        <Input
          placeholder="Search rune"
          onChange={(e) => {
            setUserSearchInput(e.target.value.toLowerCase());
          }}
        />
        <Checkbox
          onChange={() => setRecipeIsEnabled(!recipeIsEnabled)}
          color="white"
        >
          3 to 1 recipe
        </Checkbox>
        <ClearButton onClick={handleClearRunes}>Clear</ClearButton>
      </ButtonWrapper>
      <ButtonWrapper>
        {types.map((type) => (
          <Checkbox
            key={type}
            onChange={(e) => {
              handleFilterRuneword(type.toLowerCase(), e.target.checked);
            }}
            color="white"
            checked={selectedType.includes(type.toLowerCase())}
          >
            {type}
          </Checkbox>
        ))}
      </ButtonWrapper>
      <Container>
        <Wrapper>
          {commonRunes.map((rune) => (
            <Rune
              key={rune}
              rune={rune}
              setRuneCount={setRuneCount}
              runecolor="#ffff"
              shouldHighlight={rune.toLowerCase() === userSearchInput}
              clearRunes={clearRunes}
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
              shouldHighlight={rune.toLowerCase() === userSearchInput}
              clearRunes={clearRunes}
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
              shouldHighlight={rune.toLowerCase() === userSearchInput}
              clearRunes={clearRunes}
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
              shouldHighlight={rune.toLowerCase() === userSearchInput}
              clearRunes={clearRunes}
            />
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

RuneList.propTypes = {
  setAvailableRunewords: PropTypes.func,
};
