import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Wellness Medical Center, established [2024], is a beacon of holistic healthcare excellence in our community.
           Committed to patient-centered care, we offer comprehensive services, including primary care, specialized clinics,
            and integrative medicine. Our wellness programs empower individuals to achieve optimal health through education and support.
             Dedicated to excellence, our passionate team provides personalized care in a welcoming environment. Actively engaged in community outreach,
              we strive to improve overall health and well-being. Contact us to experience the difference at Wellness Medical Center.
          </p>
          <p>We are all in 2024!</p>
          <p> MERN STACK PROJECT</p>
          <p>
          We invite you to experience the difference at Wellness Medical Center.
           Whether you need primary care services, specialized medical treatment, 
           or support for your wellness journey, our team is here to help.
            Contact us today to schedule an appointment or learn more about our services.
          </p>
          <p>Wellness Medical Center!</p>
          <p>Empowering Health, Enriching Lives: Your Wellness Journey Starts Here!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
