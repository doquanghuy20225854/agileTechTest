import React from "react";
import styles from "./HeroSection.module.scss";
import HeroImage from "../../assets/hero-image.svg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      {/* Slide lên khi vào view */}
      <motion.div
        className={styles.left}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1>Save your data storage here</h1>
        <p>
          Data Warehouse is a data storage area that has been tested for
          security, so can you store your data here safely but not be afraid of
          being stolen by other
        </p>
        <button className={styles.learnMore}>Learn more</button>
      </motion.div>

      {/* Slide lên khi vào view */}
      <motion.div
        className={styles.right}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className={styles.imageWrap}>
          <img src={HeroImage} alt="Hero Image" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
