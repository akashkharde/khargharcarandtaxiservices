import React, { useEffect, useRef, useState } from 'react'
import Title from '../Components/Common/Title';
import ServicesList from './Subcomponents/ServicesList';
import img from '../Assets/images/homeimg.jpg';
import { useLocation } from 'react-router-dom';


function Services() {
  const location = useLocation();
  const ref = useRef()

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [location.pathname]);
  return (
    <div className="pinnac" ref={ref}>
      <img src={img} alt='img' className='front__img' />
      <section className="section-secondary-bg" title="Khargar Car And Taxi Service">
        <Title textone={"Our Services"}/>
        <ServicesList />
      </section>
    </div>
  )
}

export default Services