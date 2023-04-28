import Base from "./Base";
import minecraft from "../json/games/minecraft.json";
import videoGameTrivia from "../json/games/video-game-trivia.json";
import gameDevelopment from "../json/games/game-development.json";
import pokemon from "../json/games/pokemon.json";
import videoGamesCharacters from "../json/games/video-games-characters.json";
import { Dataset } from "../types";

type SetsMap = {
  minecraft: Dataset;
  videoGameTrivia: Dataset;
  gameDevelopment: Dataset;
  pokemon: Dataset;
  videoGamesCharacters: Dataset;
};

// https://quizlet.com/QEngBot/folders/game-competitions-games/sets
export default class Games extends Base {
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
      minecraft,
      videoGameTrivia,
      gameDevelopment,
      pokemon,
      videoGamesCharacters,
    });
  }
}
