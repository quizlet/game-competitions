import React from 'react';
import UIMarkdown from './UIMarkdown';
import styles from '../styles/Home.module.scss';

type Props = {
  readmeText: string;
};

export default function Home({ readmeText }: Props) {
  const handleCardOnClick = (src: string) => {
    if (typeof window === 'undefined') return;
    window.open(src, '_blank');
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Title}>List of games</div>
      <div className={styles.CardWrapper}>
        <div className={styles.Card} onClick={() => handleCardOnClick('/game')}>
          <div>Your Game</div>
        </div>
      </div>
      <div className={styles.Title}>Guide</div>
      <UIMarkdown text={readmeText} />
    </div>
  );
}
