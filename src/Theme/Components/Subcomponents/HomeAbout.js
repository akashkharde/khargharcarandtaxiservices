import { Link, useNavigate } from 'react-router-dom';
import img from '../../Assets/images/aboutUs-car.jpg';
import { useEffect } from 'react';
export default function HomeAbout() {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/about", { state: { pageNo: 2 } })
    }

    return (
        <div className="home-about-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600">
                        <div className="about-left-img">
                            <img src={img} alt='About' />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12" data-aos="zoom-out-left" data-aos-easing="linear" data-aos-duration="600">
                        <div className="about-right-title">
                        Driven by Excellence: Your Trusted Partner in Transportation
                        </div>
                        <div className="about-right-content">
                        Welcome to Khargar Car And Taxi Service, where we redefine the way you experience transportation. Our commitment to excellence drives every aspect of our cab services, ensuring you receive not just a ride, but an unparalleled journey.
                        </div>
                        <div className="about-right-button">
                            <button className="button-27" onClick={handleNavigate} role="button">Detail</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}