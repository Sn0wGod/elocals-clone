import React from 'react'
import logo from './images/logo1.png'
import './HomePage.css'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div>
        <div className="app">
            <img className="mt-5" src={logo} alt="logo"></img>
            <h5 className="mt-3 mb-5 roboto">Design</h5>
            <div><Link to="/product"><button className="roboto mt-5 btn btn-outline-elegant waves-effect">Product Detail</button></Link></div>
            <div><Link to="/seller"><button className="roboto seller mt-5 btn btn-outline-elegant waves-effect">Seller</button></Link></div>
        </div>
        </div>
    )
}

export default HomePage
