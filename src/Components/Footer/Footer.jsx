import React from 'react'
import fb from "../../Assets/facebook.png"
import insta from "../../Assets/instagram.png"
import twitter from "../../Assets/twitter.png"
import youtube from "../../Assets/youtube.png"
import "./Footer.css"
import { Link } from 'react-scroll'
// import {Link} from "react-router-dom"
const Footer = () => {
    return (
        <>
            <div className="container-fluid footer ms-0  g-0">
                <div className="container d-flex justify-content-center align-items-center flex-column">
                    <div className="row footer_row d-flex justify-content-evenly align-items-center">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12   footer_info">
                            <h5 >Kingsukh <br /> Guest <br /> House</h5>
                            <p>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels,
                                making every moment of your getaway truly extraordinary.</p>
                            <a href="https://api.whatsapp.com/send?phone=919007062180"><button className='btn footer_btn pt-2 ' >Book Now</button></a>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12  footer_info">
                            <h5 className='ms-2'>QUICK LINKS</h5>
                            <ul className='ms-0 me-0 mt-4'>
                                <Link to="heros" smooth={true} offset={0} duration={50} ><li>Browse Destinations</li></Link>
                                <Link to="heros" smooth={true} offset={0} duration={50} ><li>Special Offers & Packages</li></Link>
                                <Link to="heros" smooth={true} offset={0} duration={50} ><li>Room Types & Amenities</li></Link>
                                <Link to="heros" smooth={true} offset={0} duration={50} ><li>Customer Reviews & Ratings</li></Link>
                                <Link to="heros" smooth={true} offset={0} duration={50} ><li>Travel Tips & Guides</li></Link>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12 footer_info">
                            <h5 className='ms-2 mb-4 '>OUR SERVICES</h5>
                            <ul className=' me-0 ms-0 '>
                                <li>Concierge Assistance</li>
                                <li>Flexible Booking Options</li>
                                <li>Airport Transfers</li>
                                <li>Wellness & Recreation</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12 footer_info">
                            <h5 className='ms-2'>CONTACT US</h5>
                            <ul className=' ms-0 me-0 mt-2'>
                                <a className="no-underline" href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5845332,86.8545938,16.13z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu">

                                    <li>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</li>
                                </a>
                                <li>kkghosh0099@gmail.com</li>
                                <li>+91 9007062180</li>
                                <li className='footer_icon'>
                                    <Link to='heros' smooth={true} offset={0} duration={50}><img src={fb} alt="" /></Link>
                                    <a href="https://www.instagram.com/kingsukhguesthouse/">  <img src={insta} alt="" /></a>
                                    <Link to='heros' smooth={true} offset={0} duration={50}> <img src={twitter} alt="" /> </Link>
                                    <Link to='heros' smooth={true} offset={0} duration={50}><img src={youtube} alt="" /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className='text-center mt-5 footer_bottom'>Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
                </div>
            </div>

        </>
    )
}

export default Footer
