import React from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
          {/* left side */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle"></div>
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, type: "spring" }}
              >
                Khám Phá <br /> Nơi Ở Phù Hợp <br /> Nhất
              </motion.h1>
            </div>
            <div className="flexColStart hero-des">
              <span className="secondaryText">
                Tìm nhiều loại nơi ở phù hợp với bạn rất dễ dàng
              </span>
              <span className="secondaryText">
                Quên đi mọi khó khăn trong việc tìm kiếm một nơi ở cho bạn
              </span>
            </div>
            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">Tìm kiếm</button>
            </div>
            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Sản phẩm cao cấp</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1950} end={2000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Khách hàng hạnh phúc</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp end={28} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Giải thưởng</span>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flexCenter hero-right">
            <motion.div
              className="image-container"
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              <img src="./hero-image.png" alt="" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
