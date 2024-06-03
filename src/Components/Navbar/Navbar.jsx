import React from 'react'
import "./Navbar.css"
// import { Link } from 'react-router-dom'
import { Link } from "react-scroll"
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container nav-container">
                    <a className="navbar-brand ms-2" href="https://api.whatsapp.com/send?phone=919007062180">Kingsukh <br />Guest House</a>
                    <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="heros" smooth={true} offset={0} duration={50} className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='About' smooth={true} offset={0} duration={50} className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="services" smooth={true} offset={0} duration={50} className="nav-link" >Servies</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="rooms" smooth={true} offset={0} duration={50} className="nav-link" href="/">Rooms</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="gallery" smooth={true} offset={0} duration={50} className="nav-link" href="/">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="form" className="nav-link" smooth={true} offset={50} duration={50} >Contact</Link>
                            </li>
                        </ul>

                        <a href="https://api.whatsapp.com/send?phone=919007062180"><button className="btn nav-btn me-5 ">Book Now</button></a>

                    </div>
                </div>
            </nav>



        </>
    )
}

export default Navbar
