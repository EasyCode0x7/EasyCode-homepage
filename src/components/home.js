import React, { Component } from 'react';
import '../App.css';
import deved from '../images/dev-ed-wave.png';
import { Link } from 'react-router-dom';



const Home = () => {

    const Twitter = "https://twitter.com/EasyCode0x7";
    const Linkedin = "https://linkedin.com/";
    const YTChannel = "https://youtube.com/@EasyCode_";
    const TM = "https://www.craftz.dog/";

    return (
        <div>

            <div className='content text-center'>

                <div className='h3-text fs22 d-flex justify-content-between rounded'>
                    <span className="ps-5"><svg width="15" height="15" class="w-5 inline-block" viewBox="0 0 40 40" fill="currentColor"><path fill="currentColor" d="M13.319,4.13C13.319,4.13 10.313,4.08 9.501,9.535C9.133,13.546 12.568,15.516 14.12,15.497C15.556,15.495 17.638,14.151 17.486,9.765C17.334,5.38 14.98,4.15 13.319,4.13"></path><path d="M3.12,15.575C2.626,16.02 0.637,18.024 3.508,22.915C6.379,27.806 8.628,23.888 8.923,23.455C9.218,23.021 11.41,20.306 8.664,16.924C5.918,13.543 3.12,15.575 3.12,15.575Z"></path><path d="M24.03,4.13C22.048,4.309 20.472,5.325 20.922,9.814C21.373,14.304 24.4,15.613 25.402,15.499C26.404,15.385 28.84,12.521 28.427,9.814C28.013,7.107 26.837,4.296 24.03,4.13Z"></path><path d="M32.114,11.35C32.114,11.35 29.196,13.155 30.864,16.589C32.532,20.023 34.677,19.25 36,18.588C37.322,17.927 38.02,14.778 35.931,12.665C33.843,10.551 32.114,11.35 32.114,11.35Z"></path><path d="M19.212,17.136C19.212,17.136 12.651,19.306 12.84,25.174C12.888,28.022 10.569,28.548 11.073,32.567C11.727,34.322 12.649,36.92 15.89,36.85C19.131,36.781 19.603,34.354 23.377,32.97C27.151,31.586 31.009,33.828 33.802,31.213C36.596,28.598 35.188,24.468 31.876,22.731C28.564,20.995 24.793,16.327 19.212,17.136Z"></path></svg></span>
                    Hi, I'm an inspired web developer based in Spain!
                    <span className="pe-5"><svg width="15" height="15" class="w-5 inline-block" viewBox="0 0 40 40" fill="currentColor"><path fill="currentColor" d="M13.319,4.13C13.319,4.13 10.313,4.08 9.501,9.535C9.133,13.546 12.568,15.516 14.12,15.497C15.556,15.495 17.638,14.151 17.486,9.765C17.334,5.38 14.98,4.15 13.319,4.13"></path><path d="M3.12,15.575C2.626,16.02 0.637,18.024 3.508,22.915C6.379,27.806 8.628,23.888 8.923,23.455C9.218,23.021 11.41,20.306 8.664,16.924C5.918,13.543 3.12,15.575 3.12,15.575Z"></path><path d="M24.03,4.13C22.048,4.309 20.472,5.325 20.922,9.814C21.373,14.304 24.4,15.613 25.402,15.499C26.404,15.385 28.84,12.521 28.427,9.814C28.013,7.107 26.837,4.296 24.03,4.13Z"></path><path d="M32.114,11.35C32.114,11.35 29.196,13.155 30.864,16.589C32.532,20.023 34.677,19.25 36,18.588C37.322,17.927 38.02,14.778 35.931,12.665C33.843,10.551 32.114,11.35 32.114,11.35Z"></path><path d="M19.212,17.136C19.212,17.136 12.651,19.306 12.84,25.174C12.888,28.022 10.569,28.548 11.073,32.567C11.727,34.322 12.649,36.92 15.89,36.85C19.131,36.781 19.603,34.354 23.377,32.97C27.151,31.586 31.009,33.828 33.802,31.213C36.596,28.598 35.188,24.468 31.876,22.731C28.564,20.995 24.793,16.327 19.212,17.136Z"></path></svg></span>
                </div>

                <div className='text-start h2-text pt-3 pb-1 d-flex align-items-center justify-content-between'>
                    <h2 className='fw-bold' style={{fontSize: "2.2em"}}>Juan Alberto<p className="pt-1">Digital Craftsman ( / Developer / Pentester )</p></h2>
                    <img className='avatar rounded-circle img-responsive' src={deved} />
                </div>

                <div>
                    <hr></hr>
                    <p className='wxTrs text-start fnt-em css-15t5e7o w-50'>
                        Freelancer providing services for programming and ethical hacking needs.
                        Join me down below and let's get cracking!
                        Happy hacking!. Website inspired in <a href={TM} className="text-warning text-decoration-none">Takuya Matsuyama's</a> webpage.
                    </p>
                </div>

            </div>

            <div className='identificador gap-5 py-4 d-flex align-items-center h-50' style={{fontSize: "2.2rem"}}>
                <a href={Twitter}><i class="fa-brands fa-twitter onit twitter"></i></a>
                <a href={Linkedin}><i class="fa-brands fa-linkedin onit linkedin"></i></a>
                <a href={YTChannel}><i class="fa-brands fa-youtube onit youtube"></i></a>
            </div>



            <div className="text-white fnt-em">

                <div  className='pt-5 eternal-blue'>
                    <h2  className='underline'>Work</h2>
                    <p className='css-15t5e7o'>
                        Juan is an independent developer and Front-end Developer based in Spain with a passion for creating digital
                        services/things he wants. He has a knack for everything related to product launches, from planning and
                        design to solving real-life problems with code. When he's not online, he loves to hang out hobnobbing and
                        with her family. Currently, he is looking for a job in a company that will make him grow as a professional.
                            He will post content to market his products and his YouTube channel called "
                            <a className='text-danger text-decoration-none' href={YTChannel}> Easy Code </a>
                            ".
                    </p>
                </div>

                <div class="py-4 d-flex">
                    <Link to='/works' class="btn btn-outline-danger mx-auto" style={{fontSize: "1em", fontWeight: "400"}}>My portfolio</Link>
                </div>

                <div className='pt-4 eternal-blue'>
                    <h2 className='underline'>Bio</h2>
                    <p className='css-15t5e7o'>
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

        </div>
    
    )
    
}

export default Home;

