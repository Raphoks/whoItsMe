import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

interface OverviewProps {
  guesses: {
    male: {
      count: number;
      names: string[];
    };
    female: {
      count: number;
      names: string[];
    };
  };
}

import styles from './styles.module.scss';
export default function Overview({ guesses }: OverviewProps) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const totalGuesses = guesses.male.count + guesses.female.count;

  const malePercentage = (guesses.male.count * 100) / totalGuesses;
  const femalePercentage = (guesses.female.count * 100) / totalGuesses;

  const data = {
    labels: ['Vicente', 'Clara'],
    datasets: [
      {
        label: '# of Votes',
        data: [guesses.male.count, guesses.female.count],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={styles.container}>
      <h2>Resultado parcial</h2>
      <div className={styles.chart}>
        <Pie data={data} />
      </div>

      <div className={styles.list}>
        <div className={styles.title}>
          <h2>
            Vicente <span>({Math.trunc(malePercentage)}%)</span>
          </h2>
          <h2>
            Clara <span>({Math.trunc(femalePercentage)}%)</span>
          </h2>
        </div>
        <div className={styles.containerList}>
          <ul className={styles.listBoy}>
            {guesses.male.names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>

          <ul className={styles.listGirl}>
            {guesses.female.names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
