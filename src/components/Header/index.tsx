import Image from 'next/image';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.menu}>
      <div className={styles.logo}>
        <Image
          src="/assets/images/logo.png"
          alt="whoItsMe"
          width={570}
          height={438}
        />
      </div>
    </header>
  );
}
