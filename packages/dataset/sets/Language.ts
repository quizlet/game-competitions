import Base from "./Base";
import japaneseFood from "../json/language/japanese-foods.json";
import chineseFood from "../json/language/chinese-food.json";
import spanishFood from "../json/language/chinese-food.json";
import frenchFood from "../json/language/french-food.json";
import foodTermsAndDefinition from "../json/language/food-terms-and-definition.json";
import { Dataset } from "../types";

type SetsMap = {
  chineseFood: Dataset;
  foodTermsAndDefinition: Dataset;
  frenchFood: Dataset;
  japaneseFood: Dataset;
  spanishFood: Dataset;
};

// https://quizlet.com/QEngBot/folders/game-competitions-language/sets
export default class Language extends Base {
  static getRandomSet() {
    const sets = Object.values(this.getAllSetsMap());
    return this._getRandomSet(sets);
  }

  static getAllSets() {
    const sets = Object.values(this.getAllSetsMap());
    return this._getAllSets(sets);
  }

  static getAllSetsMap() {
    return this._getAllSetsMap<SetsMap>({
      chineseFood,
      foodTermsAndDefinition,
      frenchFood,
      japaneseFood,
      spanishFood,
    });
  }
}
