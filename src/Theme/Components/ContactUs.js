import React, { useEffect, useRef, useState } from 'react'
import Title from '../Components/Common/Title'
import img from '../Assets/images/aboutUs-car.jpg';

import address from '../Assets/images/map_icon.png';
import { useLocation } from 'react-router-dom';

function ContactUs() {
  const location = useLocation();
  const ref = useRef()

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [location.pathname]);

  const phoneNumber = '8888198469';

  const handleCallButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleRedirect = () => {
    const googleMapsAddress = 'Swapnapoorti Complex, Valley Shilp Rd, Sector 36, 33HG+FR6, Swapnapoorti Complex, Valley Shilp Rd, Sector 36, Kharghar, Navi Mumbai, Maharashtra 410210';


    if (googleMapsAddress) {
      const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(googleMapsAddress)}`;
      window.open(googleMapsUrl, '_blank');
    } else {
      console.error('No location provided.');
    }

  };
  return (
    <div className="pinnac" ref={ref} >
      <div className="about_img_main">
        <img src={img} className='front__img' />
      </div>
      <section title="Khargar Car And Taxi Service">
        <Title textone={"Lest's Connect Togethor"} />
        <div className='container'>
          <div className='d-flex justify-content-center align-items-center '>
            <div className='col d-flex flex-column justify-content-center align-items-center'>
              <div onClick={handleCallButtonClick}>
                + 91 8888198469
              </div>
              <div>
                <button className="button-27" onClick={handleCallButtonClick} role="button">Call Now</button>
              </div>
            </div>
            <div className='col   d-flex flex-column justify-content-center align-items-center'>
              <div>
                <img className='f__img  cursor-pointer' src={address} onClick={handleRedirect} />
              </div>
              <div className="float-start p-1  cursor-pointer " onClick={handleRedirect}>
                Swapnapoorti Complex, Valley Shilp Rd, Sector 36, 33HG+FR6, Swapnapoorti Complex, Valley Shilp Rd, Sector 36, Kharghar, Navi Mumbai, Maharashtra 410210
              </div>
            </div>
            <div className='col  d-flex flex-column justify-content-center align-items-center'>
              <div>Opening Hours</div>
              <div>
                <ul>
                  <li>Mon: Open 24 hours</li>
                  <li>Tue: Open 24 hours</li>
                  <li>Wed: Open 24 hours</li>
                  <li>Thus: Open 24 hours</li>
                  <li>Fri: Open 24 hours</li>
                  <li>Sat: Open 24 hours</li>
                  <li>Sun: Open 24 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs