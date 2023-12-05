import img from '../../Assets/images/aboutUs-car.jpg';


export default function AboutSectionOne() {

    return (
        <div>
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
                    </div>
                </div>
        </div>
        </div>
    )
}