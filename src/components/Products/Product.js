import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import logo from './images/logo2.png'
import Bitmap1 from './images/Bitmap-1.png'
import Bitmap2 from './images/Bitmap-2.png'
import Bitmap3 from './images/Bitmap-3.png'
import Bitmap4 from './images/Bitmap-4.png'
import Bitmap from './images/Bitmap.png'
import phoneback from './images/phoneback.png'
import phonefront from './images/phonefront.png'
import g1 from './images/g1.png'
import g2 from './images/g2.png'
import g3 from './images/g3.png'
import g4 from './images/g4.png'
import shopping from './svg/shopping_bag.svg'
import pin from './svg/pin.svg'
import orders from './svg/orders.svg'
import profile from './svg/profile.svg'
import signout from './svg/signout.svg'
import share from './svg/share.svg'
import wishlist from './svg/wishlist.svg'
import seller from './svg/Seller.svg'
import Tab from '../Tabs/Tab'
import Review from '../Reviews/Review'
import Footer from '../Footers/Footer'


import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../Actions/Action'



function Product() {

    const Product_Detail = useSelector(state => state.Product_Detail);
    const { product, error,loading } = Product_Detail;
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(listProducts());
      return () => {
        //
      };
    }, []);

    console.log(loading)
    if(loading)
    {
      return (
          <div className="text-center mt-5">
        <div className="spinner-border text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      </div>
      )
    }

    return (
        <div>
        
           
<nav className="mb-1 navbar navbar-expand-lg navbar-light sticky-top navcolor">
    <Link className="navbar-brand" to="/">
         <img src={logo} alt="logo" className="logo"></img>
    </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
    aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
      <Link to="#" className="nav-link ma">
         <img src={pin} alt="lolipop" width="15px" height="18px"></img>  Banglore
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">
        <img alt="shopping" src={shopping} width="38px" height="35px"></img></Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false" to="#">
           <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" className="rounded-circle z-depth-0"
            alt="avatar image" height="35"/></Link>
        <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
          <Link className="dropdown-item roboto1" to="#" ><img src={orders} alt="orders"></img> My Orders</Link>
          <Link className="dropdown-item roboto1" to="#" ><img src={profile} alt="profile"></img> Profile</Link>
          <Link className="dropdown-item roboto1" to="#" ><img src={signout} alt="signout"></img> Signout</Link>
        </div>
      </li>
    </ul>
  </div>
</nav>
<br></br>
        <div className="container blab">
            <span>Homes <i className="fas fa-angle-right"></i> Mobile <i className="fas fa-angle-right"></i>
            <span className="compare custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked"/>
                <label className="custom-control-label" htmlFor="defaultUnchecked">Add to compare</label>
            </span>

            </span>
        </div>
        <br></br>
        <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-2">
                       <div className="sidephoto">
                           <div className="mb-2 bitmap1">
                            <img src={Bitmap4} alt="Bitmap1"></img>
                           </div>
                           <div className="mb-2">
                           <img src={Bitmap1} alt="Bitmap2"></img>
                            </div>
                            <div className="mb-2">
                            <img src={Bitmap3} alt="Bitmap3"></img>
                           </div>
                           <div>
                           <img src={Bitmap2} alt="Bitmap4"></img>
                            </div>
                       </div>
                    </div>
                    <div className="col-md-10">
                       <div className="share">
                            <img className="mr-4" src={share} alt="share"></img>
                            <img className="mr-4" src={wishlist} alt="wishlist"></img>
                       </div>
                       <div >
                           <img className="mainphoto" src={Bitmap} alt="bitmap"></img>
                       </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
            <div className="container">
                <div className="oneplus mb-2">
                OnePlus 7Pro(Almond, 8GB RAM, 128 GB)
                </div>
                <div>
                    <ul className="feature">
                    {product.productDetail.productKeyFeatures.map((dat,index)=>(
                        <li key={index}>{dat}</li>
                    ))}
                       
                    </ul>
                </div>
                <div>
                    <span className="feature">color</span>
                    <img className="thumbnail" src={phonefront} alt="ph"></img>
                    <img className="thumbnail" src={phoneback} alt="pho"></img>
                    <span className="ml-3 feature">Quantity</span>
                    <span className="ml-3">
                    <select className="browser-default">
                        <option defaultValue>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    </span>
                </div>
                <div className="mt-3">
            <span className="max">₹{product.errorcode && product.productDetail.variants[0].elocalsPrice}  </span><span className="mid">₹{product.errorcode && product.productDetail.variants[0].sellerPrice}</span><span className="offer"> 30% off</span>
            </div>
            <p className="tax">Inclusive of all taxes</p>
            <div>
                <span className="emi">Delivery in 24 hrs</span>
                <span className="ml-5 emi">EMI options available</span>
                <span className="ml-5 emi">Pay Later</span>
            </div>
            <div className="mt-2">
            <button className="btn btn-sm btn-primary mt-0"><i className="fas fa-bolt"></i><span>  Buy Now</span></button>
            <button type="button" className="btn btn-sm cartbtn mt-0"><i className="fas fa-shopping-bag"></i><span> Add to Cart</span></button>
           
            </div>
            <div className="tax mt-3"><i className="fas fa-calendar-week"></i> Calender Delivery</div>

            </div>
            </div>
        </div>
        <br></br>

        <div className="row app1">
            <div className="col-md-3">
            <div className="raj app1">
                <div>Seller</div>
                <div>{product.errorcode && product.productDetail.sellerName}</div>
            </div>
            <hr className="hid"></hr>
            </div>
            <div className="col-md-3">
               <Link to="/seller"> <div className="tax">View more sellers(7)
                <img height="20px" width="20px" className="ml-2" src={seller} alt="seller"></img>
            </div></Link>
            </div>
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-3">
                        <img height="20px" width="20px" src={g2} alt="g1"></img>
                        <li className="list gre">Shipping Fee </li>
                        <li className="list">Free</li>  
                    </div>
                    <div className="col-md-3">
                        <img height="20px" width="20px" src={g3} alt="g2"></img>
                        <li className="list gre">Best Price</li>
                        <li className="list">Always</li>
                    </div>
                    <div className="col-md-3">
                         <img height="20px" width="20px" src={g1} alt="g3"></img>
                        <li className="list gre">Pickup Service</li>
                        <li className="list">One Hour</li>
                    </div>
                    <div className="col-md-3">
                        <img height="20px" width="20px" src={g4} alt="g4"></img>
                        <li className="list gre">Request your product</li>
                        <li className="list">Get Anything</li>
                    </div>

                </div>
            </div>
        </div>
        <hr></hr>
        <br></br><br></br>
        <Tab/>
        <hr></hr>
        <br></br>
        <Review/>
        <Footer/>

    </div>

</div>
    )
}

export default Product
