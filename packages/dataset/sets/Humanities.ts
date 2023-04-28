import Base from "./Base";
import egyptianHistory from "../json/humanities/egyptian-history.json";
import philosophy101 from "../json/humanities/philosophy-101.json";
import ladyMacbethQuotes from "../json/humanities/lady-macbeth-quotes.json";
import caseLawContract from "../json/humanities/case-law-contract.json";
import theOdysseyQuestionsAndAnswers from "../json/humanities/the-odyssey-questions-and-answers.json";
import { Dataset } from "../types";

type SetsMap = {
  caseLawContract: Dataset;
  egyptianHistory: Dataset;
  theOdysseyQuestionsAndAnswers: Dataset;
  ladyMacbethQuotes: Dataset;
  philosophy101: Dataset;
};

// https://quizlet.com/QEngBot/folders/game-competitions-science/sets
export default class Humanity extends Base {
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
      caseLawContract,
      egyptianHistory,
      theOdysseyQuestionsAndAnswers,
      ladyMacbethQuotes,
      philosophy101,
    });
  }
}
