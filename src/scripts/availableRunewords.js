import allRunewords from "../data/runewords.json";

const exchangeRules = {
  Ol: "Old",
  Tor: "Naf",
  Eth: "Uth",
  Tul: "Rex",
  Ert: "Thal",
  Old: "Thor",
  Naf: "Eth",
  Uth: "Tul",
  Rex: "Ert",
  Thal: "Ymn",
  Ymn: "Sal",
  Sal: "Nut",
  Nut: "Del",
  Del: "Hel",
  Hel: "Io",
  Io: "Lum",
  lum: "Co",
  Co: "Fel",
  Fel: "Lem",
  Lem: "Pul",
  Pul: "Um",
  Um: "Mal",
  Mal: "Ist",
  Ist: "Gul",
  Gul: "Vex",
  Vex: "Qi",
  Qi: "Xo",
  Xo: "Sur",
  Sur: "Ber",
  Ber: "Jah",
  Jah: "Drax",
  Drax: "Zed",
};

export const findCraftableRunewords = (userRunes, recipeIsEnabled) => {
  let craftableRunewords = {};

  for (let item in allRunewords) {
    const { runeword } = allRunewords[item];
    const runeAmountRequirement = {};

    runeword.forEach((rune) => {
      runeAmountRequirement[rune] = (runeAmountRequirement[rune] || 0) + 1;
    });

    let canCraft = true;
    const runesCopy = { ...userRunes };
    for (let rune in runeAmountRequirement) {
      let needed = runeAmountRequirement[rune];
      if (!recipeIsEnabled && (runesCopy[rune] || 0) < needed) {
        canCraft = false;
      } else if (
        recipeIsEnabled &&
        !checkAndConvertRune(runesCopy, rune, needed)
      ) {
        canCraft = false;
        break;
      }
    }

    for (let rune in runeAmountRequirement) {
      let needed = runeAmountRequirement[rune];
      if ((runesCopy[rune] || 0) < needed) {
        canCraft = false;
      }
    }

    if (canCraft) {
      craftableRunewords[item] = allRunewords[item];
    }
  }

  return craftableRunewords;
};

function checkAndConvertRune(runes, targetRune, needed) {
  if ((runes[targetRune] || 0) >= needed) {
    return true;
  }

  const convertedRunes = {};

  let stillNeeded = needed - (runes[targetRune] || 0);

  // Try to find conversions for the target rune if not enough is available
  for (const [srcRune, dstRune] of Object.entries(exchangeRules)) {
    if (dstRune === targetRune) {
      // Attempt to get enough source runes first before converting them
      let neededSrcRunes = stillNeeded * 3; // Each dstRune needs 3 srcRunes
      if (checkAndConvertRune(runes, srcRune, neededSrcRunes)) {
        let canConvert = Math.floor((runes[srcRune] || 0) / 3);
        let conversions = Math.min(canConvert, stillNeeded);
        runes[srcRune] -= conversions * 3;
        runes[dstRune] = (runes[dstRune] || 0) + conversions;
        convertedRunes[srcRune] = conversions * 3;
        convertedRunes[dstRune] = conversions;
        stillNeeded -= conversions;
      }
    }
    if (stillNeeded <= 0) {
      return true;
    }
  }
  return false;
}
