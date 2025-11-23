import styles from './HomePage.module.scss';
import { SliderSection } from '../../components/SliderSection/SliderSection';

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.homePage__searchWrapper}>
        <input
          type="text"
          placeholder="Пошук місця..."
          className={styles.homePage__search}
        />
        <button className={styles.homePage__filterButton}>
          <img
            src="img/icons/filter.svg"
            alt="іконка фільтрів"
            className={styles.homePage__filterIcon}
            aria-label="Фільтри"
          />
        </button>
      </div>
      <section>
        <SliderSection title="Рекомендовані" link="/" />
      </section>
      <section>
        <SliderSection title="Усі" link="/" />
      </section>
    </div>
  );
};
