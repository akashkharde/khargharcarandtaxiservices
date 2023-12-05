import React, { useEffect, useRef, useState } from 'react';
import AboutSectionOne from './Subcomponents/AboutSectionOne';
import OurVision from './Subcomponents/OurVision';
import Title from '../Components/Common/Title';
import img from '../Assets/design/v3.jpg';
import { useLocation } from 'react-router-dom';



function About() {
  const location = useLocation();
  const ref = useRef()

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [location.pathname]);
  return (
    <div className="pinnac mb-4" ref={ref}>
      <div className="about_img_main">
        <img src={img} alt='about Img' className='front__img' />
      </div>
      <section title="Kharghar Car And Taxi Services About Us">
        <Title textone={"About Us"} />
        <AboutSectionOne />
      </section>
      <section className="section-secondary-bg_" title="Khargar Car And Taxi Service">
        <Title textone={"Our Mission"} />
        <OurVision />
      </section>
    </div>
  )
}

export default About