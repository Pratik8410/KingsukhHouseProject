import React from 'react'
import "./Gallery.css"
import img1 from "../../Assets/out.jpg"
import img2 from "../../Assets/ayodhya.webp"
import img3 from "../../Assets/large.jpg"
import img4 from "../../Assets/palash.webp"
import img5 from "../../Assets/small.jpg"
import img6 from "../../Assets/baranti.webp"
import img7 from "../../Assets/recep.jpg"
import img8 from "../../Assets/flower.jpg"
import img9 from "../../Assets/room1.jpg"
import img10 from "../../Assets/mithonDam.webp"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Gallery = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <section id="gallary" name="gallery">
                <div className="gallery__content">
                    <h6 className='gallery_heading' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" >GALLERY <div className='line mb-2'></div></h6>
                </div>
                <br />
                <div className="container11">
                    <div className="box11 a"><img src={img1} alt="" /></div>
                    <div className="box11 b"><img src={img2} alt="" /></div>
                    <div className="box11 c"><img src={img3} alt="" /></div>
                    <div className="box11 d"><img src={img4} alt="" /></div>
                    <div className="box11 e"><img src={img5} alt="" /></div>
                    <div className="box11 f"><img src={img6} alt="" /></div>
                    <div className="box11 g"><img src={img7} alt="" /></div>
                    <div className="box11 h"><img src={img8} alt="" /></div>
                    <div className="box11 j"><img src={img9} alt="" /></div>
                    <div className="box11 i"><img src={img10} alt="" /></div>
                </div>
            </section>
        </>


    )
}

export default Gallery
