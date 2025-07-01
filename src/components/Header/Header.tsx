import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Header = ({ isLoggedIn, onLogout }: HeaderProps) => {
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

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
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
          {!isLoggedIn && <a href="#signup">Signup</a>}
        </nav>
        <div className={styles.actions}>
          {isLoggedIn ? (
            <>
              <Link to="/profile" className={styles.primaryBtn}>
                Profile
              </Link>
              <button onClick={onLogout} className={styles.primaryBtn}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className={styles.primaryBtn}>
              Sign in <span>&rarr;</span>
            </Link>
          )}
        </div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ""}`}>
        <a href="#about">About</a>
        <a href="#help">Help</a>
        <a href="#features">Features</a>
        {isLoggedIn ? (
          <>
            <Link
              to="/profile"
              style={{ color: "white", textDecoration: "none" }}
            >
              Profile
            </Link>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onLogout();
              }}
              style={{ color: "white", textDecoration: "none" }}
            >
              Logout
            </a>
          </>
        ) : (
          <>
            <a href="#signup">Signup</a>
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              Sign in
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;