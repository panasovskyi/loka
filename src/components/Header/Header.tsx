import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__side}></div>
        <Link
          to="/"
          className={styles.header__logoLink}
          aria-label="Головна сторінка"
        >
          loka.
        </Link>
        <div className={styles.header__side}>
          <button
            className={styles.header__notificationButton}
            type="button"
            aria-label="Сповіщення"
          >
            <img
              src="img/icons/notifications-empty.svg"
              alt="іконка сповіщень"
              className={styles.header__notificationIcon}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
