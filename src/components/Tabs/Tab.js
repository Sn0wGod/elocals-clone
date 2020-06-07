import React from 'react'
import './Tab.css'


import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../Actions/Action'

function Tab() {

  const Product_Detail = useSelector(state => state.Product_Detail);
  const { product, error } = Product_Detail;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //
    };
  }, []);


    return (
        <div>
            
            
          
            <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item robotofont">
    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
      aria-selected="true">Specification</a>
  </li>
  <li className="nav-item robotofont">
    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
      aria-selected="false">Description</a>
  </li>
  
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        
        <table className="table table-borderless responsive robotofont">
  
  <tbody>
    <tr>
      <th>OS</th>
      <td>{product.errorcode && product.productDetail.productSpecification.OS}</td>
    </tr>
    <tr>
      <th>RAM</th>
      <td>{product.errorcode && product.productDetail.productSpecification.RAM}</td>
    </tr>
    <tr>
      <th>Item Weight</th>
      <td>{product.errorcode && product.productDetail.productSpecification["Item Weight"]}</td>
    </tr>
    <tr>
      <th>Product Dimension</th>
      <td>{product.errorcode && product.productDetail.productSpecification["Product Dimensions"]}</td>
    </tr>
    <tr>
      <th>Battery</th>
      <td>{product.errorcode && product.productDetail.productSpecification.Batteries}</td>
    </tr>
    <tr>
      <th>Wireless com</th>
      <td>{product.errorcode && product.productDetail.productSpecification["Wireless communication technologies"]}</td>
    </tr>
  </tbody>
</table>
   
   </div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
     
      <p className="desc mt-3">{product.errorcode ?product.productDetail.productDescription:null}</p>

  </div>
  
</div>

        </div>
    )
}

export default Tab

        
