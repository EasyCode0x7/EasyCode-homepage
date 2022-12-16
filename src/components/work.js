import '../App.css';
import React, { Component } from 'react';



function Work() {

    const YtChannel = 'https://www.youtube.com/@EasyCode_';

    return(
        <div className="text-white fnt-em">

            <div  className='pt-5 eternal-blue'>
                <h2  className='underline'>Work</h2>
                <p className='css-15t5e7o'>
                    Juan is an independent developer and Front-end Developer based in Spain with a passion for creating digital
                    services/things he wants. He has a knack for everything related to product launches, from planning and
                    design to solving real-life problems with code. When he's not online, he loves to hang out hobnobbing and
                    with her family. Currently, he is looking for a job in a company that will make him grow as a professional.
                        He will post content to market his products and his YouTube channel called "
                        <a className='text-danger text-decoration-none' href={YtChannel}> Easy Code </a>
                        ".
                </p>
            </div>

            <div class="py-4 d-flex">
                <a class="btn btn-danger mx-auto" href='/works' style={{fontSize: "1em", fontWeight: "400"}}>My portfolio</a>
            </div>

            <div className='pt-4 eternal-blue'>
                <h2 className='underline'>NextJs</h2>
                <p className='css-15t5e7o'>
                    I offer from a wide range of services, including system administration, 
                    programming and ethical hacking.
                    I offer from a wide range of services, including system administration, 
                    programming and ethical hacking.
                    I offer from a wide range of services, including system administration, 
                    programming and ethical hacking.
                </p>
            </div>

            <div className='pt-4 eternal-blue'>
                <h2 className='underline'>ReactJs</h2>
                <p className='css-15t5e7o'>
                    I offer from a wide range of services, including system administration, 
                    programming and ethical hacking.
                    I offer from a wide range of services, including system administration, 
                    programming and ethical hacking.
                    I offer from a wide range of services, including system administration, 
                    programming and ethical hacking.
                </p>
            </div>

            <div className='pt-4 eternal-blue'>
                <h2 className='underline'>Bio</h2>
                <p className='css-15t5e7o'>
                    I offer from a wide range of services, including system administration, 
                    programming and ethical hacking.
                    I offer from a wide range of services, including system administration, 
                    programming and ethical hacking.
                    I offer from a wide range of services, including system administration, 
                    programming and ethical hacking.
                </p>
            </div>

        </div>
    )
}

export default Work;

