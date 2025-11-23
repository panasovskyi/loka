import { useState } from 'react';
import styles from './PropertyCard.module.scss';
import { Link } from 'react-router-dom';

export const PropertyCard = () => {
  const [isCardActive, setIsCardActive] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const favIconLink = isFilled
    ? 'img/icons/heart-filled.svg'
    : 'img/icons/heart.svg';

  const handlePress = () => {
    setIsCardActive(true);
    setTimeout(() => setIsCardActive(false), 150);
  };

  return (
    <Link
      to="/"
      className={`${styles.card} ${isCardActive ? styles['card--active'] : ''}`}
      onClick={handlePress}
    >
      <div className={styles.imageWrapper}>
        <img
          src="img/property.webp"
          alt="Фото нерухомості"
          className={styles.image}
        />
        <button
          className={styles.favButton}
          onClick={e => {
            setIsCardActive(false);
            setIsFilled(!isFilled);
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <img src={favIconLink} alt="обрані" />
        </button>
      </div>

      <div className={styles.content}>
        <Link
          to="/"
          className={styles.category}
          onClick={e => {
            e.stopPropagation();
            setIsCardActive(false);
          }}
        >
          Квартира
        </Link>

        <div className={styles.address}>
          <img
            src="img/icons/location.svg"
            alt="Іконка геолокації"
            className={styles.icon}
          />
          <div className={styles.text}>
            <h3 className={styles.street}>Вул. Івана Франка, 43</h3>
            <span className={styles.city}>Київ</span>
          </div>
        </div>

        <p className={styles.details}>
          <span className={styles.details__rooms}>3 кімнати</span>
          <span className={styles.details__square}>
            70 м<sup>2</sup>
          </span>
        </p>

        <p className={styles.price}>
          <span className={styles.price__usdt}>400 USDT</span>
          <span className={styles.price__uah}>16 839 грн</span>
        </p>

        <p className={styles.date}>Дата публікації: 10.12.2025</p>
      </div>
    </Link>
  );
};
