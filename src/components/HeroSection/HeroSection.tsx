import React from "react";
import styles from "./HeroSection.module.scss";
import HeroImage from "../../assets/hero-image.svg";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1>Save your data storage here</h1>
        <p>Data Warehouse is a data storage area that has been tested for security, so can you store your data here safely but not be afraid of being stolen by other</p>
        <button className={styles.learnMore}>Learn more</button>
      </div>
      <div className={styles.right}>
        <div className={styles.imageWrap}>
          <img src={HeroImage} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;