import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const NAV = {
  home: 'головна',
  location: 'мапа',
  chat: 'чат',
  profile: 'профіль',
};

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {Object.entries(NAV).map(([link, label]) => {
          const path = link === 'home' ? '/' : `/${link}`;

          return (
            <li key={link} className={styles.menu__item}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${styles.menu__link} ${isActive ? styles['menu__link--active'] : ''}`
                }
              >
                {({ isActive }) => {
                  const iconSrc = `img/icons/${link}${isActive ? '-active' : ''}.svg`;
                  const labelClass = isActive
                    ? `${styles.menu__label} ${styles['menu__label--active']}`
                    : styles.menu__label;

                  return (
                    <>
                      <img
                        src={iconSrc}
                        alt={label}
                        className={styles.menu__icon}
                      />
                      <span className={labelClass}>{label}</span>
                    </>
                  );
                }}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
