import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "./../../utils/common.js";
import PropertyCard from "../PropertyCard/PropertyCard";
import { PuffLoader } from "react-spinners";
import useProperties from "../../customHooks/useProperties";

const Residencies = () => {
  const { data, isError, isLoading } = useProperties();

  if (isError) {
    return (
      <div className="wrapper">
        <span> Error while fetching data</span>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader height="80" width="80" radius={1} color="#4066ff" aria-label="puff-loading" />
      </div>
    );
  }
  return (
    <div className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.residency.slice(0, 8).map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card} /> {/* component */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
