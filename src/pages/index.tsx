import Head from 'next/head';
import { useState } from 'react';
import { database } from '../../services/firebase';
import { collection, getDocs, query } from 'firebase/firestore';

import { Background } from '../components/Background';
import { Container } from '../components/Container';
import GuessForm from '../components/GuessForm';
import Overview from '../components/Overview';
import { Gender } from '../enums/gender.enum';

import styles from './home.module.scss';

type CountGuesses = {
  male: {
    count: number;
    names: string[];
  };
  female: {
    count: number;
    names: string[];
  };
};

const initialState: CountGuesses = {
  male: { count: 0, names: [] },
  female: { count: 0, names: [] },
};

export default function Home() {
  const [viewResult, setViewResult] = useState(false);
  const [guesses, setGuesses] = useState<CountGuesses>(initialState);

  async function handleResultClick() {
    const namesRef = collection(database, 'names');
    const queryNames = query(namesRef);
    const querySnapshot = await getDocs(queryNames);

    const guessList = querySnapshot.docs.map((doc) => doc.data());

    const countGuesses = guessList.reduce<CountGuesses>((value, guess) => {
      if (guess.gender === Gender.MALE) {
        value.male.count += 1;
        value.male.names.push(guess.name);
      }

      if (guess.gender === Gender.FEMALE) {
        value.female.count += 1;
        value.female.names.push(guess.name);
      }

      return value;
    }, initialState);

    setGuesses(countGuesses);
    setViewResult(true);
  }

  return (
    <>
      <Head>
        <title>Quem sou eu?</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <main className={styles.contentContainer}>
        <Background src="/assets/images/wave-haikei.svg" />
        <Container>
          <div className={styles.display}>
            <section className={styles.hero}>
              <span>Hey, quem sou eu?</span>
              <h1>
                Vicente ou
                <br /> Clara?
              </h1>
            </section>

            {!viewResult ? (
              <GuessForm viewResult={handleResultClick} />
            ) : (
              <Overview guesses={guesses} />
            )}
          </div>
        </Container>
      </main>
    </>
  );
}
