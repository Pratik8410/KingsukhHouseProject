import React from 'react'
import "./Room.css"
import large from "../../Assets/large.jpg"
import small from "../../Assets/small.jpg"
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Room = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='room' name='rooms'>
            <div className="container">
                <div className="room_info">
                    <p className='room_heading'>OUR LIVING ROOM <div className='line'></div></p>
                    <h2 className='room_heading2'>The Most Memorable Rest <br /> Time Starts Here.</h2>
                </div>

            </div>
            <div className="container  mt-5">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-2 ">

                        <div class="card  shadow" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                            <img src={small} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Cozy Haven Room</h5>
                                <p class="card-text ms-0">Escape to comfort in our Cozy Haven Room, a snug retreat designed for <br /> intimate relaxation.</p>
                                <p class="card-text ms-0"><small class="text-muted">Starting from <span>Rs. 1000/night</span> </small></p>
                                <a href="https://api.whatsapp.com/send?phone=919007062180"><button className='btn1'>Book Now</button></a>
                                <div className="icons">
                                    <div className="icon">
                                        <i class="fa-solid fa-heart" style={{ color: "#f472b6", marginTop: "5px" }}></i>
                                    </div>
                                    <div className="icon">
                                        <i class="fa-solid fa-fill-drip" style={{ color: "#c084fc" }}></i>
                                    </div>
                                    <div className="icon">
                                        <LocalPoliceOutlinedIcon style={{ color: "#60a5fa" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-2" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                        <div class="card shadow">
                            <img src={large} className="card-img-top img-fluid" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Spacious Serenity Suite</h5>
                                <p class="card-text ms-0">Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.</p>
                                <p class="card-text ms-0"><small class="text-muted">Starting from <span>Rs. 1500/night</span> </small></p>
                                <a href="https://api.whatsapp.com/send?phone=919007062180"><button className='btn1'>Book Now</button></a>
                                <div className="icons">
                                    <div className="icon">
                                        <i class="fa-solid fa-heart" style={{ color: "#f472b6" }}></i>
                                    </div>
                                    <div className="icon">
                                        <i class="fa-solid fa-fill-drip" style={{ color: "#c084fc" }}></i>
                                    </div>
                                    <div className="icon">
                                        <LocalPoliceOutlinedIcon style={{ color: "#60a5fa" }} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>




    )
}

export default Room
