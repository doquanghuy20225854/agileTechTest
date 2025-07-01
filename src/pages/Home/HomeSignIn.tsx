import React from "react";
import styles from "./index.module.scss";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Features from "../../components/Features/Features";
import Testimonials from "../../components/Testimonial/Testimonials";
import Footer from "../../components/Footer/Footer";
import { logout } from "../../api/auth";
import { removeToken } from "../../utils/token";
import { useNavigate } from "react-router-dom";

const HomeSignIn = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <div className={styles.homeBg}>
      <Header isLoggedIn={true} onLogout={handleLogout} />
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomeSignIn; 