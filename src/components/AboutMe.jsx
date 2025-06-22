// components/AboutMe.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from '../assets/profile.png';
import fb from '../social-icons/fb.png';
import ig from '../social-icons/ig.png';
import wa from '../social-icons/wa.png';
import linkedin from '../social-icons/in.png';
import github from '../social-icons/GitHub.png';

const AboutMe = () => {
  return (
   <div className="about-me-container">
     <div className="about-heading">
       <h1>ABOUT TEAM FOUNDER </h1>
     </div>

     <div className="owner-photo-and-details">
        <div className="profile">
          <img src={Profile} alt="profile-picture" />
        </div>
    
        <div className="social-links">
           <NavLink to="https://www.facebook.com/gouranga.rout.908?mibextid=ZbWKwL"><img src={fb} alt="fb.png" data-aos="zoom-in" /></NavLink>
           <NavLink to="https://www.instagram.com/gouranga__rout/"><img src={ig} alt="ig.png" data-aos="zoom-in" /></NavLink>
           <NavLink to="https://bit.ly/getDetails_"><img src={wa} alt="wa.png" data-aos="zoom-in" /></NavLink>
           <NavLink to="https://www.linkedin.com/in/gourangarout?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <img src={linkedin} alt="in.png" data-aos="zoom-in" /></NavLink>
           <NavLink to="https://github.com/gouranga-rout/"><img src={github} alt="GitHub.png" data-aos="zoom-in" /></NavLink>       
       </div>

       <div className="details">
         <p>I am <span className="sky">Aaryan</span> <br />
            I’m proud to be the <span className="sky">Founder of Team Aaryan</span> — a newly launched digital network built on innovation, 
            collaboration, and real results.<br /><br />

           <span className="sky">What’s Next ?</span><br />
           We’re actively developing advanced <span className="sky">automation systems</span> for the team — 
           designed to <span className="sky">streamline workflows, boost efficiency, and maximize profits</span> for all our members.</p><br /><br />

      </div>

   </div>


</div>

  );
};

export default AboutMe;
