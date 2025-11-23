import { Link } from 'react-router-dom';
import styles from './SliderSection.module.scss';
import { Slider } from '../Slider/Slider';

type Props = {
  title: string;
  link: string;
};

export const SliderSection: React.FC<Props> = ({ title, link }) => {
  return (
    <div className={styles.sliderSection}>
      <div className={styles.sliderSection__head}>
        <h3 className={styles.sliderSection__title}>{title}</h3>
        <Link
          to={link}
          className={styles.sliderSection__link}
          aria-label={`Перейти до ${title}`}
        >
          <img
            src="img/icons/arrow-right.svg"
            alt="стрілка вправо"
            className={styles.sliderSection__icon}
          />
        </Link>
      </div>
      <div className={styles.sliderSection__sliderWrapper}>
        <Slider />
      </div>
    </div>
  );
};
