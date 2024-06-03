import React from 'react'
import "./Banner.css"

const Banner = () => {
    return (
        <div className='Container  mt-5 mb-5'>
            <div className="row d-flex justify-content-center me-0 ms-0 align-items-center">
                <div className="col-10 shadow p-4">
                    <div className="row d-flex justify-content-evenly align-content-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                            <h2 className='Rating'>100+</h2>
                            <h5 className='banner_text'>Bookings Completed</h5>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                            <h2 className='Rating'>150+</h2>
                            <h5 className='banner_text'>Happy Customers</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner
