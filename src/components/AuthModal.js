import React, { useState } from 'react';
import styles from '../styles/AuthModal.module.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);

  if (!isOpen) return null;

  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.activePopup : ''} ${isRegister ? styles.active : ''}`}>
      <span className={styles.iconClose} onClick={onClose}>
        ✖️ 
      </span>
      <div className={`${styles.formBox} ${styles.login}`}>
        <h2>Login</h2>
        <form action="#">
          <div className={styles.inputBox}>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className={styles.inputBox}>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className={styles.rememberForgot}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className={styles.btn}>
            Login
          </button>
          <div className={styles.loginRegister}>
            <p>
              Dont have an account? <a href="#" onClick={() => setIsRegister(true)}> Register</a>
            </p>
          </div>
        </form>
      </div>

      <div className={`${styles.formBox} ${styles.register}`}>
        <h2>Registration</h2>
        <form action="#">
          <div className={styles.inputBox}>
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className={styles.inputBox}>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className={styles.inputBox}>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className={styles.rememberForgot}>
            <label>
              <input type="checkbox" /> I agree to the terms and conditions
            </label>
          </div>
          <button type="submit" className={styles.btn}>
            Register
          </button>
          <div className={styles.loginRegister}>
            <p>
              Already have an account? <a href="#" onClick={() => setIsRegister(false)}> Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
