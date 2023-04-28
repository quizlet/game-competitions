import Base from "./Base";
import plateTectonics from "../json/science/plate-tectonics.json";
import cellBiology from "../json/science/cell-biology.json";
import biologygenetics from "../json/science/biologygenetics.json";
import physicsFormulas from "../json/science/physics-formulas.json";
import chemistry from "../json/science/chemistry.json";
import { Dataset } from "../types";

type SetsMap = {
  plateTectonics: Dataset;
  cellBiology: Dataset;
  biologygenetics: Dataset;
  physicsFormulas: Dataset;
  chemistry: Dataset;
};

// https://quizlet.com/QEngBot/folders/game-competitions-science/sets
export default class Science extends Base {
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
      plateTectonics,
      cellBiology,
      biologygenetics,
      physicsFormulas,
      chemistry,
    });
  }
}
