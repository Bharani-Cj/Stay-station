import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "./../SearchBar/SearchBar";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings flexCenter innerWidth hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1 initial={{ y: "2rem", opacity: 0 }} animate={{ y: "0rem", opacity: 1 }} transition={{ duration: 2, type: "spring" }}>
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>
          <SearchBar name="Search" width="100%" />
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="hero-right">
          <motion.div className="image-container" initial={{ x: "5rem", opacity: 0 }} animate={{ x: "0rem", opacity: 1 }} transition={{ duration: 2, type: "spring" }}>
            <img src="./img/hero-image.png" alt="heroImg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
