import React from 'react';
import styles from './aside_navbar.module.css';

const AsideNavbar = ({ onHomeClick }) => {
  const onClick = () => {
    onHomeClick('');
  };

  return (
    <nav className={styles.navbar}>
      <button className={`${styles.home} ${styles.button}`} onClick={onClick}>
        <i className="fas fa-home"></i>
        <span>Home</span>
      </button>
      <button className={`${styles.explore} ${styles.button}`}>
        <i className="fas fa-compass"></i>
        <span>Explore</span>
      </button>
      <button className={`${styles.subscription} ${styles.button}`}>
        <i className="fas fa-folder-open"></i>
        <span>Subscriptions</span>
      </button>
      <button className={`${styles.storage} ${styles.button}`}>
        <i className="fas fa-box"></i>
        <span>Library</span>
      </button>
    </nav>
  );
};

export default AsideNavbar;
