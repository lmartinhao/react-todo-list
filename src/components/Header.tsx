import styles from './Header.module.css';
import todoLogo from '../assets/rocket.svg';

export function Header() {

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo do ToDo" />
      <div className={styles.headerText}>
        <strong className={styles.blueText}>to</strong>
        <strong className={styles.purpleText}>do</strong>
      </div>
    </header>
  );
}
