import React from "react";
import styles from "./index.module.scss";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Features from "../../components/Features/Features";
import Testimonials from "../../components/Testimonial/Testimonials";
import Footer from "../../components/Footer/Footer";

const HomeNotSignIn = () => (
  <div className={styles.homeBg}>
    <Header isLoggedIn={false} onLogout={() => {}} />
    <HeroSection />
    <Features />
    <Testimonials />
    <Footer />
  </div>
);

export default HomeNotSignIn; 