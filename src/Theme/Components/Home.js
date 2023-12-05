import React, { useEffect, useRef, useState } from 'react'
import HomeAbout from './Subcomponents/HomeAbout';
import Title from "./Common/Title";
import ServicesList from './Subcomponents/ServicesList';
import img from '../Assets/images/homeimg.jpg';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const ref = useRef()

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [location.pathname]);

  const phoneNumber = '+91 8888198469';

  const handleCallButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div style={{ width: "100%" }} ref={ref}>
      <div className="about_img_main">
        <img src={img} className='front__img' />
        <div className='home_h1_h2'>
          <h1>Khargar Car And Taxi Service</h1>
          <div>
            <button className="button-27" onClick={handleCallButtonClick} role="button">Call Now</button>
          </div>
        </div>
      </div>
      <section title="Khargar Car And Taxi Service">
        <Title textone={"About Us"} />
        <HomeAbout />
      </section>

      <section className="section-secondary-bg" title="Khargar Car And Taxi Service">
        <Title textone={"Our Services"} />
        <ServicesList />
        <div className='d-flex justify-content-center align-items-center'>
          <button className="button-27" onClick={handleCallButtonClick} role="button">Call Now</button>
        </div>
      </section>

    </div>
  )
}

export default Home