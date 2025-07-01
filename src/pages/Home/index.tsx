import React from "react";
import { getToken } from "../../utils/token";
import HomeSignIn from "./HomeSignIn";
import HomeNotSignIn from "./HomeNotSignIn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "../../components/Testimonial/Testimonials";
import Header from "../../components/Header/Header";    
import HeroSection from "../../components/HeroSection/HeroSection";
import styles from "./index.module.scss";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const isLoggedIn = !!getToken();
  return isLoggedIn ? <HomeSignIn /> : <HomeNotSignIn />;
};

export default Home;   