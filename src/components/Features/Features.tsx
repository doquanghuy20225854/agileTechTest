import React from "react";
import styles from "./Features.module.scss";
import imgSearch from "../../assets/imageSearch.svg";
import img24h from "../../assets/image24h.svg";
import imgPrint from "../../assets/imagePrintOut.svg";
import imgSecurity from "../../assets/imageSecurityCode.svg";
import { motion } from "framer-motion";

const features = [
  {
    img: imgSearch,
    title: "Search Data",
    desc: "Don't worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time.",
    color: styles.bgBlue,
  },
  {
    img: img24h,
    title: "24 Hours Access",
    desc: "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.",
    color: styles.bgPurple,
  },
  {
    img: imgPrint,
    title: "Print Out",
    desc: "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
    color: styles.bgPink,
  },
  {
    img: imgSecurity,
    title: "Security Code",
    desc: "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",
    color: styles.bgLightBlue,
  },
];

const Features = () => {
  return (
    <section className={styles.features}>
      <h2 className={styles.title}>Features</h2>
      <p className={styles.subtitle}>
        Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.
      </p>

      <div className={styles.grid}>
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            className={`${styles.card} ${f.color}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: idx * 0.2, // Tạo hiệu ứng stagger theo thứ tự
            }}
          >
            <div className={styles.imgWrap}>
              <img src={f.img} alt={f.title} className={styles.img} />
            </div>
            <div className={styles.content}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <a href="/" className={styles.learnMore}>
                Learn more <span>&rarr;</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
