import {Link} from 'react-router-dom';
// import * as Ti from "react-icons/ti"
import logo from '../../Assets/images/carlogo.png'
import address from '../../Assets/images/map_icon.png'
import contact from '../../Assets/images/call-icon.png'
import gmail from '../../Assets/images/mail-logo.png'



export default function Footer() {
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
        <footer className="footer-div">
            <div className="container footer-first">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 footer_logo_300 d-flex justify-content-center align-items-center">
                        <div className="footer-logo">
                            <img src={logo} alt="pinnacc"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="contact-info-detail">
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className="footer-contact-info">
                                    <img className='f__img  cursor-pointer' src={address} onClick={handleRedirect}/>
                                </div>
                                <div className="float-start p-1  cursor-pointer "  onClick={handleRedirect}>
                                Swapnapoorti Complex, Valley Shilp Rd, Sector 36, 33HG+FR6, Swapnapoorti Complex, Valley Shilp Rd, Sector 36, Kharghar, Navi Mumbai, Maharashtra 410210
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div>
  
                                <div className="footer-contact-info" onClick={handleCallButtonClick} >
                                    <img className='f__img  cursor-pointer' src={contact} />
                                </div>
                                <div className="float-start p-1  cursor-pointer" onClick={handleCallButtonClick}>
                                    + 91 8888198469
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div>
                                <div className="footer-contact-info">
                                    <img className='f__img   cursor-pointer' src={gmail} />
                                </div>
                                <div className="float-start p-1  cursor-pointer">
                                ganeshrahane485@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>©Khargar Car And Taxi Service 2023. All rights reserved.</div>
        </footer>
    )
}