import Base from "./Base";
import geographyQuizzes from "../json/geography/geography-quizzes.json";
import countryFlags from "../json/geography/country-flags.json";
import riversOfEurope from "../json/geography/rivers-of-europe.json";
import usStateCapitals from "../json/geography/us-state-capitals.json";
import geography from "../json/geography/geography.json";
import { Dataset } from "../types";

type SetsMap = {
  usStateCapitals: Dataset;
  geographyQuizzes: Dataset;
  riversOfEurope: Dataset;
  countryFlags: Dataset;
  geography: Dataset;
};

// https://quizlet.com/QEngBot/folders/game-competitions-geography/sets
export default class Geography extends Base {
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
      usStateCapitals,
      geographyQuizzes,
      riversOfEurope,
      countryFlags,
      geography,
    });
  }
}
