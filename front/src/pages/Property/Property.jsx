import React from "react";
import "./Property.css";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProperty } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdMeetingRoom, MdLocationPin } from "react-icons/md";

const Property = () => {
  const { propertyId } = useParams();
  const { data, isError, isLoading } = useQuery(["resd", propertyId], () => getProperty(propertyId));
  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching property details</span>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter">
        <div className="flexCenter paddings">
          <PuffLoader height="80" width="80" radius={1} color="#4066ff" aria-label="puff-loading" />
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        <div className="like">
          <AiFillHeart size={24} color="white" />
        </div>

        {/* image */}
        <img src={data.residency.image} alt="images" />
        <div className="flexCenter property-details">
          {/* left */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className="primaryText"> {data.residency.title} </span>
              <span className="orangeText"> $ {data.residency.price} </span>
            </div>

            {/* facilities */}
            <div className="flexStart facilities">
              <div className="flexStart facility">
                <FaShower size={20} color="#1f3e72" />
                <span>{data?.residency?.facilities.bathroom} Bathroom</span>
              </div>
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1f3e72" />
                <span>{data?.residency?.facilities.bedrooms} rooms</span>
              </div>
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1f3e72" />
                <span>{data?.residency?.facilities.parking} parking</span>
              </div>
            </div>

            {/* description */}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data.residency.description}
            </span>

            {/* address */}
            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data.residency.address}
                {data.residency.city}
                {data.residency.country}
              </span>
            </div>

            {/* button */}
            <button className="button">Book Now </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
