import Image from 'next/image';

import styles from './styles.module.scss';

interface GenderButtonProps {
  gender: 'male' | 'female';
  selected: boolean;
  onClick: () => void;
}

export default function GenderButton({
  gender,
  selected,
  onClick,
}: GenderButtonProps) {
  const backgroundButton =
    gender === 'male' ? styles.maleButton : styles.femaleButton;

  const disabledButton = !selected ? styles.disabledButton : '';

  return (
    <button
      type="button"
      className={`${backgroundButton} ${disabledButton}`}
      onClick={onClick}
    >
      <Image
        src={`/assets/images/icon-${gender}.svg`}
        alt=""
        width={100}
        height={100}
      />
    </button>
  );
}
