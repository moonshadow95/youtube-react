import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
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
        <i class="fas fa-bars"></i>
      </button>
      <div className={styles.logo}>
        <button className={styles.icon}>
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
    </header>
  );
});
export default SearchHeader;
