import Base from "./Base";
import pixarMovies from "../json/fun/pixar-movies.json";
import disneyPrincessTrivia from "../json/fun/disney-princess-trivia.json";
import footballTeam from "../json/fun/football-teams.json";
import studioGhibliMovieTrivia from "../json/fun/studio-ghibli-movie-trivia.json";
import randomTvShowsAndMovies from "../json/fun/random-tv-shows-and-movies.json";
import jokes from "../json/fun/jokes.json";
import { Dataset } from "../types";

type SetsMap = {
  disneyPrincessTrivia: Dataset;
  pixarMovies: Dataset;
  randomTvShowsAndMovies: Dataset;
  studioGhibliMovieTrivia: Dataset;
  footballTeam: Dataset;
  jokes: Dataset;
};

// https://quizlet.com/QEngBot/folders/game-competitions-fun/sets
export default class Fun extends Base {
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
      disneyPrincessTrivia,
      pixarMovies,
      randomTvShowsAndMovies,
      studioGhibliMovieTrivia,
      footballTeam,
      jokes,
    });
  }
}
