import React from "react";
import TripImage from '../offer/Jim_Corbett.jpg';

const TripDetails = () => {
 return (
   <div className="moreDetailsSection" id="TripSection">
     <h1>National & International Trip Details</h1>
     <h2 className="headline">Launching Richind's 3rd National Trip</h2>

      <div className="tripImage">
        <img src={TripImage} alt="JimCorbetTripDetails.jpg"></img>
      </div>

     <ul> 
      <li> Destination: <span>Nainital & Jim Corbett Park</span></li>
      <li> Duration: <span>3 Nights, 4 Days</span></li>   
      <li>Qualification Criteria: <span>Earn ₹89,000 Active Income</span></li>
      <li> Time Period: <span>15th June to 15th August 2025</span> (62 Day's)</li>
     </ul>

   </div>
 );
};

export default TripDetails;
