import '../App.css';
import React, { Component } from 'react';
import { buymeacoffee } from '../images/buymeacoffee.PNG';



function Work() {

    return(
        <div className="text-white">

            <h2 className='pt-5 fs-3'>Work</h2>

            <p className='fs-6 css-15t5e7o'>
            Juan is an independent developer and Front-end Developer based in Spain with a passion for creating digital
             services/things he wants. He has a knack for everything related to product launches, from planning and
              design to solving real-life problems with code. When she's not online, she loves to hang out hobnobbing and
               with her family. Currently, he is looking for a job in a company that will make him grow as a professional.
                He will post content to market his products and his YouTube channel called "<a className='text-danger text-decoration-none' href='https://www.youtube.com/@EasyCode_'> Easy Code </a>".
            </p>

            <div className='p-4 justify-content-center d-flex'>
                <button className='btn btn-warning' type="button" href='/works'>My portfolio</button>
            </div>

            <p className='fs-5'>
            I offer from a wide range of services, including system administration, 
            programming and ethical hacking.
            </p>

            <div className='igual border d-inline-block'>
                <div className='d-flex justify-content-center align-items-center p-4'>
                    I offer from a wide range of services, including system administration, 
                    programming and ethical hacking.
                </div>
            </div>

            <div  className='igual border d-inline-block'>
                <div className='d-flex justify-content-center align-items-center p-4'>
                    I offer from a wide range of services, including system administration, 
                    programming and ethical hacking.
                </div>
            </div>

            <div  className='igual border d-inline-block'>
                <div className='d-flex justify-content-center align-items-center p-4'>
                    I offer from a wide range of services, including system administration, 
                    programming and ethical hacking.
                </div>
            </div>


            <div className='pt-5'>
                <h3 className='py-4'>-How do you take your coffee?</h3>
                <img className='avatar d-flex rounded' src={buymeacoffee} />
            </div>

        </div>
    )
}

export default Work;

