import React from 'react';
import styles from '../styles/Header.module.css';

const Header = ({ onLoginClick }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>LD Garage</h1>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contacts</a>
        <button className={styles.btnLogin} onClick={onLoginClick}>
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
