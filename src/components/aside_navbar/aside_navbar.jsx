import React from 'react';
import styles from './aside_navbar.module.css';

const AsideNavbar = ({ mostPopular }) => {
  const onClick = () => {
    mostPopular();
  };

  return (
    <nav className={styles.navbar}>
      <button className={`${styles.home} ${styles.button}`} onClick={onClick}>
        <i className="fas fa-home fa-lg"></i>
        <span>Home</span>
      </button>
      <button className={`${styles.explore} ${styles.button}`}>
        <i className="fas fa-compass fa-lg"></i>
        <span>Explore</span>
      </button>
      <button className={`${styles.subscription} ${styles.button}`}>
        <i className="fas fa-folder-open fa-lg"></i>
        <span>Subscriptions</span>
      </button>
      <button className={`${styles.storage} ${styles.button}`}>
        <i className="fas fa-box fa-lg"></i>
        <span>Library</span>
      </button>
    </nav>
  );
};

export default AsideNavbar;
