import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./Testimonials.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  id: string;
  imageUrl: string;
  desctiption: string;
}

const fallbackAvatar = "https://ui-avatars.com/api/?name=User&background=random";

const avatarUrls = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("https://api-test-web.agiletech.vn/galleries")
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(() => setTestimonials([]));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.title}>Testimonials</h2>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {testimonials.map((item, idx) => (
            <div key={item.id || idx}>
              {/* Wrapper này đảm bảo styles.card không bị override bởi react-slick */}
              <div className={styles.card}>
                <div className={styles.avatarWrap}>
                  <img
                    src={avatarUrls[idx % avatarUrls.length]}
                    alt="avatar"
                    onError={e => (e.currentTarget.src = fallbackAvatar)}
                    className={styles.avatar}
                  />
                  <div>
                    <div className={styles.name}>User {idx + 1}</div>
                  </div>
                </div>
                <div className={styles.desc}>{item.desctiption}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
