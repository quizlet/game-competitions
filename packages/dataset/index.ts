import Base from "./sets/Base";
import Fun from "./sets/Fun";
import Games from "./sets/Games";
import Geography from "./sets/Geography";
import Humanities from "./sets/Humanities";
import Language from "./sets/Language";
import Science from "./sets/Science";

export default class Quizlet extends Base {
  static getRandomSet() {
    return this._getRandomSet(Quizlet.getAllSets());
  }

  static getAllSets() {
    return this._getAllSets([
      ...Fun.getAllSets(),
      ...Games.getAllSets(),
      ...Geography.getAllSets(),
      ...Humanities.getAllSets(),
      ...Language.getAllSets(),
      ...Science.getAllSets(),
    ]);
  }
}
