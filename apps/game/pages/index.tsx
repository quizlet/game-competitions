import Quizlet from 'dataset';
import Fun from 'dataset/sets/Fun';
import {
  CardSide,
  MediaType,
  SerializedMedia,
  SerializedMediaImage,
  SerializedMediaText,
  StudiableItem,
} from 'dataset/types';
import Image from 'next/image';

const IMAGE_HEIGHT = 100;
const IMAGE_WIDTH = 120;
export default function Game() {
  // If you don't want SSR
  if (typeof window !== 'undefined') return null;

  // to get a specific Set
  const { disneyPrincessTrivia: quizletSet } = Fun.getAllSetsMap();
  // const quizletSet = Quizlet.getRandomSet();

  const renderMedia = (media: SerializedMedia) => {
    switch (media.type) {
      case MediaType.TEXT:
        const { plainText } = media as SerializedMediaText;
        return <div key={media.type}>{plainText}</div>;
      case MediaType.IMAGE:
        const { url } = media as SerializedMediaImage;
        return (
          <Image
            alt="term image"
            height={IMAGE_HEIGHT}
            key={media.type}
            src={url}
            width={IMAGE_WIDTH}
          />
        );
    }
  };
  const renderTerm = (studiableItem: StudiableItem) => (
    <div key={studiableItem.id}>
      {studiableItem.cardSides.map(cardSide => {
        const { label, media } = cardSide;
        return (
          <div key={cardSide.sideId}>
            {label}: {media.map(termMedia => renderMedia(termMedia))}
          </div>
        );
      })}
    </div>
  );

  const renderTerms = (studiableItems: StudiableItem[]) => (
    <>
      <h3>({studiableItems.length} Terms)</h3>
      {studiableItems.map(studiableItem => renderTerm(studiableItem))}
    </>
  );

  return (
    <div>
      <h1>Your game title here!</h1>
      <h2>Set used: {quizletSet.set.title}</h2>
      {renderTerms(quizletSet.studiableItem)}
    </div>
  );
}
