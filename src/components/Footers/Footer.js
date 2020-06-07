import React from 'react'
import './Footer.css'
import bag from './images/3.png'
import Group1 from './svg/Group1.svg'
import facebook from './svg/facebook.svg'
import Instagram from './svg/lnstagram.svg'
import linkedin from './svg/linkedin.svg'
import tumblr from './svg/tumblr.svg'
import twitter from './svg/twitter.svg'
import youtube from './svg/youtube.svg'
import google1 from './svg/google1.svg'
import Paypal from './svg/Paypal.svg'
import Western from './svg/Western.svg'
import Group19 from './svg/Group19.svg'
import Group20 from './svg/Group20.svg'

function Footer() {
    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-md-4 text-center mb-5">
                        <img src={bag} alt={bag}></img>
                        <div className="robotofont mt-3 font-weight-bold">Cities we are in</div>
                        <img src={Group1} alt={Group1}></img>
                    </div>
                    <div className="col-md-8 app1">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="robotofont font-weight-bold mb-3">Follow Us</div>
                                <h6 className="robotofont font-grey">We are driven by excitment of building technologies,inventing products and providing servies that change our local shopping experience</h6>
                                <div className="mb-5">
                                    <span className="mr-2"><img src={facebook} alt={facebook}></img></span>
                                    <span className="mr-2"><img src={Instagram} alt={Instagram}></img></span>
                                    <span className="mr-2"><img src={linkedin} alt={linkedin}></img></span>
                                    <span className="mr-2"><img src={tumblr} alt={tumblr}></img></span>
                                    <span className="mr-2"><img src={twitter} alt={twitter}></img></span>
                                    <span className="mr-2"><img src={youtube} alt={youtube}></img></span>
                                    <span><img src={google1} alt={google1}></img></span>
                                </div>

                            </div>
                            <div className="col-md-4">
                            <div className="robotofont font-weight-bold mb-3">Contact Us</div>
                                <h6 className="robotofont font-grey">Location : Pune,Maharashtra</h6>
                                <h6 className="robotofont font-grey">Phone : +91 9587459687</h6>
                                <h6 className="robotofont font-grey">Email : elocals@gmail.com</h6>
                                
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-md-4">
                            <div className="robotofont font-weight-bold mb-3">Useful Links</div>
                                <h6 className="robotofont font-grey">About Us</h6>
                                <h6 className="robotofont font-grey">Contact Us</h6>
                                <h6 className="robotofont font-grey">Site map</h6>
                                
                            </div>
                            <div className="col-md-4">
                            <div className="robotofont font-weight-bold mb-3">Service</div>
                                <h6 className="robotofont font-grey">Payment</h6>
                                <h6 className="robotofont font-grey">Shipping</h6>
                                <h6 className="robotofont font-grey">Cancellation</h6>
                                
                            </div>
                            <div className="col-md-4">
                            <div className="robotofont font-weight-bold mb-3">Information</div>
                                <h6 className="robotofont font-grey">FAQ</h6>
                                <h6 className="robotofont font-grey">Privacy Policy</h6>
                                <h6 className="robotofont font-grey">Terms & Conditions</h6>
                                
                            </div>
                        </div>
                        <br></br>
                        <div className="row mb-3">
                            <div className="col-md-8">
                                <span className="robotofont">© Local Digital Service Private Limited</span>
                            </div>
                            <div className="col-md-4">
                                    <span className="mr-2"><img src={Paypal} alt="Paypal"></img></span>
                                    <span className="mr-2"><img src={Western} alt="Western"></img></span>
                                    <span className="mr-2"><img src={Group19} alt="Group19"></img></span>
                                    <span className="mr-2"><img src={Group20} alt="Group20"></img></span>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
