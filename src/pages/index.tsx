import Head from 'next/head';
import Image from 'next/image';
import { Background } from '../components/Background';
import { Container } from '../components/Container';
import GuessForm from '../components/GuessForm';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Who its me?</title>
        <link rel="icon" href="/favicon.ico" />
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

            <GuessForm />
          </div>
        </Container>
      </main>
    </>
  );
}
