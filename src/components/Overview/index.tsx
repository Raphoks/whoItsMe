import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import styles from './styles.module.scss';
export default function Overview() {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ['Vicente', 'Clara'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={styles.container}>
      <h2>Resultado</h2>
      <div className={styles.chart}>
        <Pie data={data} />
      </div>

      <div className={styles.list}>
        <div className={styles.title}>
          <h2>
            Vicente <span>(10%)</span>
          </h2>
          <h2>
            Clara <span>(40%)</span>
          </h2>
        </div>
        <div className={styles.containerList}>
          <ul className={styles.listBoy}>
            <li>Cleiton Osti da Silva</li>
            <li>Cleiton</li>
            <li>Cleiton</li>
            <li>Cleiton</li>
            <li>Cleiton</li>
            <li>Cleiton</li>
            <li>Cleiton</li>
            <li>Cleiton</li>
            <li>Cleiton</li>
            <li>Cleiton</li>
            <li>Cleiton</li>
            <li>Cleiton</li>
            <li>Cleiton</li>
          </ul>

          <ul className={styles.listGirl}>
            <li>Viluma</li>
            <li>Viluma</li>
            <li>Viluma</li>
            <li>Viluma</li>
            <li>Viluma</li>
            <li>Viluma</li>
            <li>Viluma</li>
            <li>Viluma</li>
            <li>Viluma</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
