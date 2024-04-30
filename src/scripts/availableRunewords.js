const exchangeRules = {
  tor: "gul",
};

export const findCraftableRunewords = (userRunes, allRunewords) => {
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
      let totalAvailable = runesCopy[rune] || 0;
      const requiredQuantity = runeAmountRequirement[rune];
      if (totalAvailable < requiredQuantity) {
        Object.entries(exchangeRules).forEach(([srcRune, convertedRune]) => {
          let availableSrcRune = runesCopy[srcRune];
          if (convertedRune === rune && availableSrcRune >= 3) {
            while (availableSrcRune >= 3 && totalAvailable < requiredQuantity) {
              availableSrcRune -= 3;
              totalAvailable += 1;
            }
          }
        });
      }

      if (totalAvailable < requiredQuantity) {
        canCraft = false;
        break;
      }
      runesCopy[rune] -= requiredQuantity;
    }
    if (canCraft) {
      craftableRunewords[item] = allRunewords[item];
    }
  }

  return craftableRunewords;
};
