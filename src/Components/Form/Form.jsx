import React from 'react'
import location from "../../Assets/location.png"
import mail from "../../Assets/mail.png"
import call from "../../Assets/call.png"
import fb from "../../Assets/1.png"
import insta from "../../Assets/3.png"
import twitter from "../../Assets/2.png"
import youtube from "../../Assets/5.png"
import "./Form.css"
const Form = () => {
    return (


        <>

            <div className="container-fluid Form_container p-5" name="form">
                <div className="container ms-auto me-auto contactForm d-flex justify-content-center align-items-center ">
                    <div className="row formABC d-flex justify-content-evenly align-items-center">
                        <div className="contact_info  col-lg-4 col-md-12 col-sm-12 order-2 order-lg-1 " >
                            <h2>Contact Info</h2>
                            <div className="form_info mb-3">
                                <img src={location} alt="" />
                                <p>Beside Barshal Water Tank,
                                    <br /> Manpur, Barhanti,
                                    <br /> West Bengal 723156</p>
                            </div>
                            <div className="form_info mb-3">
                                <img src={mail} alt="" />
                                <p>kkghosh0099@gmail.com</p>
                            </div>
                            <div className="form_info mb-3">
                                <img src={call} alt="" />
                                <p>+91 9007062180</p>
                            </div>
                            <div className="form_icons mb-3">
                                <img src={fb} alt="" />
                                <img src={insta} alt="" />
                                <img src={twitter} alt="" />
                                <img src={youtube} alt="" />
                            </div>

                        </div>
                        <div className="Form_details col-lg-8  col-md-12 col-sm-12 order-1 order-lg-2 ">
                            <h2 >Send message</h2>
                            <div className='form '>
                                <div className="row d-flex justify-content-evenly flex-row form-detail ">
                                    <div className=" col-lg-6 user mb-3">
                                        <input type="text" className="Form_name" required />
                                        <label>Email address</label>
                                    </div>
                                    <div className=" col-lg-6 user mb-3">
                                        <input type="text" className="Form_name" required />
                                        <label>Last Name</label>
                                    </div>

                                    <div className=" col-lg-6  user mb-3">
                                        <input type="email" className="Form_name" required />
                                        <label for=" ">Email address</label>
                                    </div>
                                    <div className=" col-lg-6 user mb-3 ">
                                        <input type="number" className="Form_name" required />
                                        <label for=" ">Mobile No.</label>
                                    </div>
                                    <div className="user mt-5">
                                        <textarea className="text_area" rows={4} required></textarea>
                                        <label>Write A message</label>
                                    </div>
                                </div>
                            </div>
                            <button className='btn form_btn mt-4 mb-2'>Send</button>
                        </div>

                    </div>

                </div>

            </div>
            {/* <div className="container">
                <div className="row ">
                    
                </div>
            </div> */}



        </>


    )
}

export default Form
