import { FormEvent, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../../services/firebase';
import GenderButton from '../GenderButton';
import Swal from 'sweetalert2';

import styles from './styles.module.scss';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export default function GuessForm() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState<Gender>();

  async function submitForm(e: FormEvent) {
    e.preventDefault();
    const guess = {
      name,
      gender,
    };

    const namesRef = collection(database, 'names');

    await addDoc(namesRef, guess);
    setGender(undefined);
    setName('');
    Swal.fire({
      title: 'Palpite enviado com sucesso',
      text: 'Se quiser pode ver os palpites já enviados!',
      icon: 'success',
      confirmButtonColor: '#38AEE6',
    });
  }

  const isMale = gender === Gender.MALE;
  const isFemale = gender === Gender.FEMALE;

  function handleGenderClick(gender: Gender) {
    setGender(gender);
  }

  const disabledButtonSubmit = !name || !gender;

  return (
    <div className={styles.guessForm}>
      <h2>Deixe seu nome e seu palpite!</h2>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className={styles.genderButtons}>
          <GenderButton
            gender={Gender.MALE}
            selected={isMale}
            onClick={() => handleGenderClick(Gender.MALE)}
          />
          <GenderButton
            gender={Gender.FEMALE}
            selected={isFemale}
            onClick={() => handleGenderClick(Gender.FEMALE)}
          />
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={disabledButtonSubmit}
        >
          Enviar palpite
        </button>
        <button type="button" className={styles.resultButton}>
          Ver palpites
        </button>
      </form>
    </div>
  );
}
