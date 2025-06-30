import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "../../components/Testimonial/Testimonials";
import Header from "../../components/Header/Header";    
import HeroSection from "../../components/HeroSection/HeroSection";
import styles from "./index.module.scss";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";

const Home = () => (
  <div className={styles.homeBg}>
    <Header />
    <HeroSection />
    <Features />
    <Testimonials />
    <Footer />
  </div>
);

export default Home;   