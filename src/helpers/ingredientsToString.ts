import { Ingredients } from "../models/beer";

const getIngredientsString = (ingredients: Ingredients) => {
  return `Ingredients: ${
    ingredients.hops.length > 0
      ? "Hops" + `(${ingredients.hops.length})`
      : "no hops"
  } ${
    ingredients.malt.length > 0
      ? "Malt" + `(${ingredients.malt.length})`
      : "no malt"
  } ${
    ingredients.yeast
      ? "Yeast" + `(${ingredients.yeast.split("-").length})`
      : "no yeast"
  }`;
};

export default getIngredientsString;
