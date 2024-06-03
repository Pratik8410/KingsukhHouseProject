import React from 'react'
import "./Hero.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className='hero' name='heros'>
                <div className="hero-text">
                    <h6 className='hero_heading1' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Simple - Unique - Friendly</h6>
                    <h1 className='hero_heading2' data-aos="fade-up" data-aos-delay="400" data-aos-duration="3000">Make Yourself At Home<br /> In Our <span className='hero_subdark'> Guest House</span></h1>
                </div>
            </div>
            <div className=' container subhero ms-auto me-auto '>
                <a href="https://api.whatsapp.com/send?phone=919007062180"><button className='btn1'>Book Now</button></a>
            </div>

        </>



    )
}

export default Hero
