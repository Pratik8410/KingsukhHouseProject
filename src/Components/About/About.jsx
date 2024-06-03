import React from 'react'
import out from "../../Assets/out.jpg"
import "./About.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="container mt-5 about" name='About'>
                <div className="row d-flex justify-content-evenly align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 me-auto ms-auto d-flex justify-content-center align-items-center">
                        <div className="about_img">
                            <img src={out} data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" alt="" />
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 about_details col-12 d-flex justify-content-center align-items-center ">
                        <div className="about_info">
                            <p className='about_heading' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">ABOUT US <div className='line'></div></p>
                            <h2 className='about_heading2' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" >The Best Holidays Start <br className='ms-3' /> Here!</h2>
                            <p className='about_para' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill,
                                Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam.
                                Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis.
                                Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality.
                                Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
                            <a href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5845332,86.8545938,16.13z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu">
                                <p className='about_address'>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
                            </a>
                            <p className='about_contact'>Contact us: +91 9007062180</p>
                            <a href="https://api.whatsapp.com/send?phone=919007062180"><button data-aos="fade-up" data-aos-offset="300" data-aos-delay="100" data-aos-duration="1000" className='btn1'>Book Now</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
