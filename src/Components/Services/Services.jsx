import React from 'react'
import "./Services.css"
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import LoopIcon from '@mui/icons-material/Loop';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MapIcon from '@mui/icons-material/Map';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Services = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='container-fluid Service' name='services'>
            <div className=" row service_info">
                <div className=" col-lg-12 service_info1">
                    <h6 className='Service_heading1'>SERVICES <div className='line'></div></h6>
                    <h2 className='Service_heading2'>Strive Only For <br /> The Best.</h2>
                    <div className="icon_info mt-5">
                        <div className="security" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">
                            <LocalPoliceOutlinedIcon className='icon_first ' />
                            <p>High Class Security</p>
                        </div>
                        <div className="security" data-aos="fade-left" data-aos-delay="250" data-aos-duration="1000">
                            <LoopIcon className='icon_second' />
                            <p>24 Hours Room Service</p>
                        </div>
                        <div className="security" data-aos="fade-left" data-aos-delay="350" data-aos-duration="1000">
                            <LocalDiningIcon className='icon_third' />
                            <p>Restaurant</p>
                        </div>
                        <div className="security" data-aos="fade-left" data-aos-delay="450" data-aos-duration="1000">
                            <MapIcon className='icon_fourth' />
                            <p>Tourist Guide Support</p>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Services
