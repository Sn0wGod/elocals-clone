import React from 'react'
import './Review.css'
import bm4 from './images/Bitmap-4@2x.png'
import icon from './svg/icon.svg'
import laptop from './svg/laptop.svg'
import armchair from './svg/armchair.svg'
import monitor from './svg/monitor.svg'
import microwave from './svg/microwave.svg'
import whatsapp from './svg/whatsapp.svg'


export default function Review() {
    return (
        <div>
            <h4><b>24 Reviews</b></h4>
            <div className=""><i className="fas fa-star sta"></i> <i className="fas fa-star sta"></i> <i className="fas fa-star sta"></i> <i className="fas fa-star sta"></i> <i className="fas fa-star sta"></i></div>
            <br></br>
            <div><span className="R font-weight-bold">R</span><div className="mt-2 robotofont"> The product just received today. The item sold by Supercomnet says 10 day replacement. But after delivery the return option is withdrawn from details of order and says if any problem arises contact local Apple service centre. It is a clear fraud for the customers who buy such a high priced handset Customer be careful about that. My set is running fine but it is not my question. Why an online store like Flipkart close the option of return without</div></div>
            <div className="mt-2"><span className="user">Rohit Rehna</span> <span className="star1">4.5 *</span> <span className="user">a week ago</span></div>
            <hr></hr>
            <div><span className="R font-weight-bold">S</span><div className="mt-2 robotofont"> Phone is good and excellent but price is so high</div></div>
            <div className="mt-2"><span className="user">Sourabh</span> <span className="star1">4.5 *</span> <span className="user">a month ago</span></div>
            <div className="tax mt-5 mb-5">See more</div>
            <div className="similar mb-5">Similar Products</div>

                <div className="row">
                    <div className="col-md-3">
                                              
                        <div className="card mb-3">

                            
                            <img className="card-img-top" src={bm4} alt="bm1"/>

                            
                            <div className="card-body">

                                <p className="card-text robotofont font-weight-bold">One Plus 7 Pro(Almond 8GB RAM,Amoled Display,256GB)</p>
                                <p className="robotofont font-weight-bold">₹ 7500</p>
                                <p className="card-text mb-0 robotofont">Seller</p>
                                <p className="card-text robotofont">Rajdeep Telecom.</p>
                                

                            </div>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className="card mb-3">

                                                        
                            <img className="card-img-top" src={bm4} alt="bm2"/>


                            <div className="card-body">

                                <p className="card-text robotofont font-weight-bold">One Plus 7 Pro(Almond 8GB RAM,Amoled Display,256GB)</p>
                                <p className="robotofont font-weight-bold">₹ 7199</p>
                                <p className="card-text mb-0 robotofont">Seller</p>
                                <p className="card-text robotofont">Rohit Telecom.</p>
                                

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-3">

                                                        
                            <img className="card-img-top" src={bm4} alt="bm3"/>


                            <div className="card-body">

                                <p className="card-text robotofont font-weight-bold">One Plus 7 Pro(Almond 8GB RAM,Amoled Display,256GB)</p>
                                <p className="robotofont font-weight-bold">₹ 7499</p>
                                <p className="card-text mb-0 robotofont">Seller</p>
                                <p className="card-text robotofont">Ramu Telecom.</p>
                                

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-3">

                                                        
                            <img className="card-img-top" src={bm4} alt="bm4"/>


                            <div className="card-body">

                                <p className="card-text robotofont font-weight-bold">One Plus 7 Pro(Almond 8GB RAM,Amoled Display,256GB)</p>
                                <p className="robotofont font-weight-bold">₹ 7200</p>
                                <p className="card-text mb-0 robotofont">Seller</p>
                                <p className="card-text robotofont">Yogesh Telecom.</p>
                                

                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="archives">
                    <h3 className="text-center mb-5 pt-5 blue1">Could not found what are you looking for?</h3>
                    <div className="text-center mb-5"><span><img src={icon} className="mr-5" alt="icon"></img></span>
                         <span><img src={laptop} className="mr-5" alt="laptop"></img></span>
                         <span><img src={armchair} className="mr-5" alt="armchair"></img></span>
                         <span><img src={microwave} className="mr-5" alt="microwave"></img></span>
                         <span><img src={monitor} alt="monitor"></img></span>
                    </div>
                    <div className="text-center mb-5">
                        <button className="btn btn-primary btn-sm mb-5">Request Product</button>
                    </div>
                </div>

                <div className="text-center robotofont">
                    <h4>Any Questions in Mind ?</h4>
                    <h6 className="font-grey mb-5">Click here for quick support</h6>
                    <img className="mb-5" height="50px" width="50px" src={whatsapp} alt={whatsapp}></img>
                </div>
        </div>
    )
}
