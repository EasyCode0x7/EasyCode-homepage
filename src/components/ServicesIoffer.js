import React from "react";
import buymeacoffee from '../images/buymeacoffee.PNG';
import '../App.css';
import '../stylesheet/styles.css';


function ServicesIoffer() {

    return (
        
        <div className="text-white">
            <p className='fs-5'>
            I offer from a wide range of services, including system administration, 
            programming and ethical hacking.
            </p>

            <div className='igual border d-inline-block m-3'>
                <div className='d-flex justify-content-center align-items-center fs-5 p-4'>
                    I offer from a wide range of services, including system administration, 
                    programming and ethical hacking.
                </div>
            </div>
            <div  className='igual border d-inline-block m-3'>
                <div className='d-flex justify-content-center align-items-center fs-5 p-4'>
                    I offer from a wide range of services, including system administration, 
                    programming and ethical hacking.
                </div>
            </div>
            <div  className='igual border d-inline-block m-3'>
                <div className='d-flex justify-content-center align-items-center fs-5 p-4'>
                    I offer from a wide range of services, including system administration, 
                    programming and ethical hacking.
                </div>
            </div>


            <div className='form pb-5 pt-5'>
                <h3 className='coffee fs-2 py-4'>-How do you take your coffee?</h3>
                <img className='d-flex rounded new border w-50' src={buymeacoffee} />
            </div>
        </div>

    )
}

export default ServicesIoffer;