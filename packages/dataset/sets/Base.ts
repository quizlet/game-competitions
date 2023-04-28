import { Dataset } from "../types";

export default class Base {
  protected static _getRandomSet(sets: Dataset[]) {
    return sets[Math.floor(Math.random() * sets.length)];
  }

  protected static _getAllSets(sets: Dataset[]) {
    return sets;
  }

  protected static _getAllSetsMap<TKey>(setMap: {
    [key in keyof TKey]: Object;
  }): {
    [key in keyof TKey]: Dataset;
  } {
    return setMap as { [key in keyof TKey]: Dataset };
  }
}
