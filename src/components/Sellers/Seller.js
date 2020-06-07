import React from 'react'
import './Seller.css'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'
import bitmap from './images/Bitmap.png'
import pin from './pin.svg'
import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listSeller } from '../../Actions/Action'




function Seller() {

  const Seller_Detail = useSelector(state => state.Seller_Detail);
  const { seller, error,loading } = Seller_Detail;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listSeller());
    return () => {
      //
    };
  }, []);

  console.log(seller)
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
            
<nav className="mb-1 navbar navbar-expand-lg navbar-light sticky-top navcolor app">
    <Link className="navbar-brand" to="/">
         <img src={logo} alt="logo" className="logo"></img>
    </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
    
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item">
        <Link to="#" className="nav-link waves-effect waves-light ma">
        <img src={pin} alt="lolipop" width="15px" height="18px"></img>  Banglore
        </Link>
      </li>
      <li className="nav-item">
        <Link to="#" className="nav-link waves-effect waves-light ma">
        Become Seller
        </Link>
      </li>
      <li className="nav-item">
        <Link to="#" className="nav-link waves-effect waves-light ma">
          Login
        </Link>
      </li>
      <li className="nav-item ">
        <button className="btn btn-primary btn-sm">Sign up</button>
      </li>
    </ul>
  </div>
</nav>
<br></br>
<div className="row container-fluid">
        <div className="col-md-7 mb-3">
        <Link className="bla" to="/product"> <i className="fas fa-angle-left"></i>  Return to product</Link>
        </div>
        <div className="col-md-5 roboto">
          <img src={bitmap} alt="bitmap"></img>OnePlus 7Pro(Almond, 8GB RAM, 128 GB)
        </div>
</div>
<br></br>


        <table className="table table-borderless app container">
  <thead className="ul">
    <tr>
     
      <th scope="col" className="robo">Seller Information</th>
      <th scope="col" className="robo app">Price & Offers</th>
  
    </tr>
    
  </thead>
 
  <tbody>
  
  {seller.otherSellerList.map((dat,index)=>(

 
    <tr key={index}>
     
      <td>
            <div className="row">
            <div className="col-md-3">
            <div className="custom-control custom-radio rad">
                    <input type="radio" className="custom-control-input" id={index} name="defaultExample2" defaultChecked/>
                    <label className="custom-control-label" htmlFor={index}></label>
                    <img className="rajdeep" src={dat.sellerDetails.sellerResources[0].resourceURL} alt="rajdeep"></img>
                    
                    
              </div>
              </div>
              <div className="col-md-5 pad">
              
                      <li className="bullet name">{dat.sellerDetails.name} <span className="star">4.5 *</span></li>
                      <li  className="bullet place">{dat.sellerDetails.area}</li>
                      <li  className="bullet offer">{dat.sellerDetails.city}</li>
                   
              
              </div>
            </div>
      </td>
      <td>
            <div>
            <span className="max">₹{dat.elocalsPrice}  </span><span className="mid">₹{dat.sellerPrice}</span><span className="offer"> 30% off</span>
            </div>
      </td>
    </tr>
    
    ))}
    
  </tbody>
</table>

<nav className="mb-1 navbar navbar-expand-lg navbar-light fixed-bottom app navcolor">
      
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbar">
    
    <ul className="navbar-nav ml-auto bottomnav  nav-flex-icons">
    <li className="nav-item ">
        <button className="btn btn-sm btn-primary"><i className="fas fa-bolt"></i><span>  Buy Now</span></button>
      </li>
      <li className="nav-item">
      <button type="button" className="btn btn-sm cartbtn"><i className="fas fa-shopping-bag"></i><span> Add to Cart</span></button>

      </li>
      <li className="nav-item">
        <Link to="#" className="nav-link waves-effect">
         <span className="cartbtn navo"><i className="fas fa-walking"></i><span> Pickup From Store</span></span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="#" className="nav-link waves-effect">
         <span className="cartbtn navo"><i className="fas fa-calendar-week"></i>Calender Delivery</span>
        </Link>
      </li>
     
    </ul>
  </div>
</nav>



    
        </div>
    )
}

export default Seller
