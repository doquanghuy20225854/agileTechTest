import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Logo from "../../assets/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.querySelector(`.${styles.mobileNav}`);
      const menuIcon = document.querySelector(`.${styles.menuIcon}`);
      if (
        menu &&
        !menu.contains(event.target as Node) &&
        !menuIcon?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logoWrap}>
          <img src={Logo} alt="Logo" className={styles.logo} />
        </a>
        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#help">Help</a>
          <a href="#features">Features</a>
          <a href="#signup">Signup</a>
        </nav>
        <button className={styles.primaryBtn}>
          Sign in <span>&rarr;</span>
        </button>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
        <a href="#about">About</a>
        <a href="#help">Help</a>
        <a href="#features">Features</a>
        <a href="#signup">Signup</a>
      </div>
    </header>
  );
};

export default Header;