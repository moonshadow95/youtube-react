import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch, mostPopular }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    if (value !== '') {
      onSearch(value);
    } else {
      mostPopular();
    }
  };

  const onHomeClick = () => {
    handleSearch();
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <button className={styles.guide}>
        <i className="fas fa-bars"></i>
      </button>
      <div className={styles.logo}>
        <button className={styles.icon} onClick={onHomeClick}>
          <i className="fab fa-youtube"></i>
        </button>
        <h1 className={styles.title}>YouTube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Search"
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <i className={`fas fa-search ${styles.search}`}></i>
      </button>
      <div className={styles.menu}>
        <div>
          <i className="fas fa-video fa-lg"></i>
          <span className={styles.description}>Make Video</span>
        </div>
        <div>
          <i className="fas fa-th fa-lg"></i>
          <span className={styles.description}>YouTube App</span>
        </div>
        <div>
          <i className="fas fa-bell fa-lg"></i>
          <span className={styles.description}>Notice</span>
        </div>
        <div>
          <i className="fas fa-user-circle fa-lg"></i>
          <span className={styles.description}>Account</span>
        </div>
      </div>
    </header>
  );
});
export default SearchHeader;
