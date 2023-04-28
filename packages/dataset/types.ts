export type SetDO = {
  id: number;
  timestamp: number;
  lastModified: number;
  publishedTimestamp: number;
  wordLang: string;
  defLang: string;
  title: string;
  description: string;
  numTerms: number;
  hasImages: boolean;
  hasDiagrams: boolean;
  _webUrl: string;
};

export enum StudiableCardSideLabel {
  WORD = "word",
  DEFINITION = "definition",
  LOCATION = "location",
}

export type TextValue = {
  plainText: string;
  languageCode: string;
  richText?: null;
};

export type ImageValue = {
  url: string;
  // `code` is a secret needed to create new image references.
  // It must be set when creating image references, but is not serialized when reading images.
  code?: string;
  width: number;
  height: number;
};

export type SerializedMediaText = {
  type: MediaType;
} & TextValue;

export type SerializedMediaImage = {
  type: MediaType;
} & ImageValue;

export type SerializedMedia = SerializedMediaImage | SerializedMediaText;

export type CardSide = {
  sideId: number;
  label: StudiableCardSideLabel;
  media: SerializedMedia[];
};

export type StudiableItem = {
  id: number;
  studiableContainerId: number;
  studiableContainerType: number;
  type: number;
  rank: number | null;
  creatorId: number;
  timestamp: number;
  lastModified: number;
  isDeleted: boolean;
  cardSides: CardSide[];
};

export type Dataset = {
  set: SetDO;
  studiableItem: StudiableItem[];
};

export enum MediaType {
  TEXT = 1,
  IMAGE = 2,
  VIDEO = 3,
  AUDIO = 4,
  DIAGRAM_SHAPE = 5,
}
