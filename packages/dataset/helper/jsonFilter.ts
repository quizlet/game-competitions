import fs from "fs";
import path from "path";
import { Dataset, StudiableItem } from "../types";

type JsonObject = {
  set: {
    [key: string]: string | number | boolean;
  };
  studiableItem: StudiableItem[];
};

const inputFilePath = path.resolve(
  __dirname,
  "../json/games/video-games-characters.json"
);

function filterJsonObject(
  input: JsonObject,
  setFieldsToInclude: string[]
): Dataset {
  const result: JsonObject = {
    set: {},
    studiableItem: [],
  };

  // set
  for (const key in input.set) {
    if (setFieldsToInclude.includes(key)) {
      result.set[key] = input.set[key];
    }
  }

  // studiableItem
  input.studiableItem.forEach((item) => {
    const { cardSides, ...rest } = item;

    const newCardSides = cardSides.map((side) => {
      const newMedia = side.media.map((m) => {
        if ("ttsUrl" in m && "ttsSlowUrl" in m) {
          const { ttsUrl, ttsSlowUrl, ...mRest } = m;
          return {
            ...mRest,
            richText: null,
          };
        }

        return m;
      });

      return { ...side, media: newMedia };
    });

    result.studiableItem.push({ ...rest, cardSides: newCardSides });
  });

  return result as Dataset;
}

const setFieldsToInclude: string[] = [
  "id",
  "timestamp",
  "lastModified",
  "publishedTimestamp",
  "wordLang",
  "defLang",
  "title",
  "description",
  "numTerms",
  "hasTerms",
  "hasImages",
  "hasDiagrams",
  "_webUrl",
];

// Read the JSON file
fs.readFile(inputFilePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  // Parse the JSON content
  const inputJson: JsonObject = JSON.parse(data);

  // Filter the JSON object
  const filteredJson: JsonObject = filterJsonObject(
    inputJson,
    setFieldsToInclude
  );

  // Convert the filtered JSON object back to a string
  const filteredJsonString: string = JSON.stringify(filteredJson, null, 2);

  // Write the filtered JSON object back to the same file
  fs.writeFile(inputFilePath, filteredJsonString, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
    } else {
      console.log(`Filtered JSON object written to: ${inputFilePath}`);
    }
  });
});
