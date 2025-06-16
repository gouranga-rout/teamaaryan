import React from "react";
import offer from '../offer/Jim_Corbett.jpg';

const PopupOffer = ({ isVisible, onClose }) => {

const handleMoreDetails = () => {
    const targetSection = document.getElementById("TripSection");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
onClose();
  };


  return (
    <>
      <div className={`place ${isVisible ? "visible" : ""}`} onClick={onClose}></div>
      <div className={`popupOffer ${isVisible ? "visible" : ""}`}>
        <img
          src={offer}
          alt="Jim Corbett National park  Meet-up Details"
        />
      {/*  <p className="popupOffer-status"> Offer Expired,<br /> Please wait for new offer</p> */}

        <button className="offermore-btn" onClick={handleMoreDetails}>
            More Details
        </button>

        <button className="offerclose-btn" onClick={onClose}>
          Close
        </button>

      </div>
    </>
  );
};

export default PopupOffer;

