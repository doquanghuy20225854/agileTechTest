import React from "react";
import styles from "./Footer.module.scss";
import Logo from "../../assets/logo.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/youtube.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as ChatIcon } from "../../assets/messenger.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.3 }}
    >
      <div className={styles.trySection}>
        <div className={styles.tryContent}>
          <h2>Try for free!</h2>
          <p>Get limited 1 week free try our features!</p>
        </div>
        <div className={styles.tryButtons}>
          <button className={styles.learnMoreBtn}>Learn more</button>
          <button className={styles.signInBtn}>
            Sign in <span>&rarr;</span>
          </button>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.companyInfo}>
            <a href="/" className={styles.logoWrap}>
              <img src={Logo} alt="DataWarehouse Logo" />
              <span>DataWarehouse</span>
            </a>
            <p className={styles.address}>
              Warehouse Society, 234 <br />
              Bahagia Ave Street PRBW 29281
            </p>
            <p className={styles.contact}>
              info@warehouse.project <br />
              1-232-3434 (Main)
            </p>
          </div>

          <div className={styles.links}>
            <h4>About</h4>
            <a href="#">Profile</a>
            <a href="#">Features</a>
            <a href="#">Careers</a>
            <a href="#">DW News</a>
          </div>

          <div className={styles.links}>
            <h4>Help</h4>
            <a href="#">Support</a>
            <a href="#">Sign up</a>
            <a href="#">Guide</a>
            <a href="#">Reports</a>
            <a href="#">Q&A</a>
          </div>

          <div className={styles.social}>
            <h4>Social Media</h4>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}><YoutubeIcon /></a>
              <a href="#" className={styles.socialIcon}><InstagramIcon /></a>
              <a href="#" className={styles.socialIcon}><GithubIcon /></a>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>
            &copy; DataWarehouse&trade;, 2020. All rights reserved. <br />
            Company Registration Number: 21479524.
          </p>
          <div className={styles.chatIcon}>
            <ChatIcon />
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
