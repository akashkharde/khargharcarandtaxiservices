import img3 from '../../Assets/images/about-icon3.png';
import img1 from '../../Assets/design/v2.jpg';




export default function ServicesList() {

    return (
        <div>
            <div className="container">
                <div className="row">

                    <div className="service   col-sm-12 col-md-6 col-lg-4 service__one" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: "scroll" }}>
                        <div className="service-img">
                            <img src={img3} alt='dot' />
                        </div>
                        <div className="service-title">
                        Real-Time Tracking
                        </div>

                    </div>

                    <div className="service  col-sm-12 col-md-6 col-lg-4 service__two" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: "scroll" }}>
                            <div className="service-img">
                                <img src={img3} alt='dot' />
                            </div>
                            <div className="service-title">
                            Airport Transfers
                            </div>
                    </div>

                    <div className="service  col-sm-12 col-md-6 col-lg-4 service__three" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: "scroll" }} >
                            <div className="service-img">
                                <img src={img3} alt='dot' />
                            </div>
                            <div className="service-title">
                            City Rides
                            </div>
                    </div>
                    <div className="service  col-sm-12 col-md-6 col-lg-4 service__four" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: "scroll" }}>
                            <div className="service-img">
                                <img src={img3} alt='dot' />
                            </div>
                            <div className="service-title">
                            Outstation Travel
                            </div>
                    </div>
                    <div className="service  col-sm-12 col-md-6 col-lg-4 service__five" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: "scroll" }} >
                            <div className="service-img">
                                <img src={img3} alt='dot' />
                            </div>
                            <div className="service-title">
                            Corporate Transportation
                            </div>
                    </div>
                    <div className="service col-sm-12 col-md-6 col-lg-4 service__six" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: "scroll" }} >
                            <div className="service-img">
                                <img src={img3} alt='dot' />
                            </div>
                            <div className="service-title">
                                Car On Rent
                            </div>
                    </div>
                    <div className="clear"></div>
                </div>

            </div>
        </div>
    )
}