import React, { Component } from 'react';
import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import '../App.css';
import deved from '../images/dev.jpeg';
import { Link, NavLink } from 'react-router-dom';



const Home = () => {

    const Twitter = "https://twitter.com/EasyCode0x7";
    const Linkedin = "https://linkedin.com/";
    const YTChannel = "https://youtube.com/@EasyCode_";
    const Tm = "https://www.craftz.dog/";
    const eJPT = "https://verified.elearnsecurity.com/certificates/6b4943a0-26a2-4ce7-8063-aff8e6bda825";
    const javaScript = "https://www.freecodecamp.org/certification/crashoverride0x7/javascript-algorithms-and-data-structures";

    const styleSize = {
        fontSize: "2.2rem"
    }

    const styleWidthPages = {
        width: "90%"
    }

    
    return (

        <div>

            <div style={{paddingTop: "60px"}}>

                <div className='fs22 d-flex justify-content-between rounded'>
                    <span className="ps-5">
                        <svg 
                            width="15" height="15" 
                            class="w-5 inline-block" 
                            viewBox="0 0 40 40" 
                            fill="currentColor">
                                <path fill="currentColor" 
                                    d="M13.319,4.13C13.319,4.13 10.313,4.08 9.501,9.535C9.133,13.546 12.568,15.516 14.12,15.497C15.556,15.495 17.638,14.151 17.486,9.765C17.334,5.38 14.98,4.15 13.319,4.13"></path>
                                <path 
                                    d="M3.12,15.575C2.626,16.02 0.637,18.024 3.508,22.915C6.379,27.806 8.628,23.888 8.923,23.455C9.218,23.021 11.41,20.306 8.664,16.924C5.918,13.543 3.12,15.575 3.12,15.575Z"></path>
                                <path 
                                    d="M24.03,4.13C22.048,4.309 20.472,5.325 20.922,9.814C21.373,14.304 24.4,15.613 25.402,15.499C26.404,15.385 28.84,12.521 28.427,9.814C28.013,7.107 26.837,4.296 24.03,4.13Z"></path>
                                <path 
                                    d="M32.114,11.35C32.114,11.35 29.196,13.155 30.864,16.589C32.532,20.023 34.677,19.25 36,18.588C37.322,17.927 38.02,14.778 35.931,12.665C33.843,10.551 32.114,11.35 32.114,11.35Z"></path>
                                <path 
                                    d="M19.212,17.136C19.212,17.136 12.651,19.306 12.84,25.174C12.888,28.022 10.569,28.548 11.073,32.567C11.727,34.322 12.649,36.92 15.89,36.85C19.131,36.781 19.603,34.354 23.377,32.97C27.151,31.586 31.009,33.828 33.802,31.213C36.596,28.598 35.188,24.468 31.876,22.731C28.564,20.995 24.793,16.327 19.212,17.136Z"></path>
                        </svg>
                    </span>
                    Hi, I'm an inspired web developer based in Spain!
                    <span className="pe-5">
                        <svg 
                            width="15" 
                            height="15" 
                            class="w-5 inline-block" 
                            viewBox="0 0 40 40" 
                            fill="currentColor">
                            <path 
                                fill="currentColor" 
                                d="M13.319,4.13C13.319,4.13 10.313,4.08 9.501,9.535C9.133,13.546 12.568,15.516 14.12,15.497C15.556,15.495 17.638,14.151 17.486,9.765C17.334,5.38 14.98,4.15 13.319,4.13"></path>
                            <path 
                                d="M3.12,15.575C2.626,16.02 0.637,18.024 3.508,22.915C6.379,27.806 8.628,23.888 8.923,23.455C9.218,23.021 11.41,20.306 8.664,16.924C5.918,13.543 3.12,15.575 3.12,15.575Z"></path>
                            <path 
                                d="M24.03,4.13C22.048,4.309 20.472,5.325 20.922,9.814C21.373,14.304 24.4,15.613 25.402,15.499C26.404,15.385 28.84,12.521 28.427,9.814C28.013,7.107 26.837,4.296 24.03,4.13Z"></path>
                            <path 
                                d="M32.114,11.35C32.114,11.35 29.196,13.155 30.864,16.589C32.532,20.023 34.677,19.25 36,18.588C37.322,17.927 38.02,14.778 35.931,12.665C33.843,10.551 32.114,11.35 32.114,11.35Z"></path>
                            <path 
                                d="M19.212,17.136C19.212,17.136 12.651,19.306 12.84,25.174C12.888,28.022 10.569,28.548 11.073,32.567C11.727,34.322 12.649,36.92 15.89,36.85C19.131,36.781 19.603,34.354 23.377,32.97C27.151,31.586 31.009,33.828 33.802,31.213C36.596,28.598 35.188,24.468 31.876,22.731C28.564,20.995 24.793,16.327 19.212,17.136Z"></path>
                        </svg>
                    </span>

                </div>

                <div className='text-start h2-text pt-3 d-flex justify-content-between'>
                    <h2 className='fw-bold fnt-heading' >Juan Alberto<p className="pt-2">Digital Craftsman (/ Developer / Pentester)</p></h2>
                    <img className='rounded-circle' style={{width: "110px", height: "110px"}} src={deved} />
                </div>

                <div style={styleWidthPages}>
                    <hr></hr>
                    <p className='text-start fnt-normal'>
                        Freelancer providing services for programming and ethical hacking needs.
                        Join me down below and let's get cracking!
                        Happy hacking!. Website inspired in <a 
                            href={Tm} 
                            className="styleTextColor">Takuya Matsuyama's</a> webpage.
                    </p>
                </div>

            </div>

            <div style={styleWidthPages}>

                <div  className='pt-4 eternal-blue'>
                    <h2  className='underline fnt-heading'>Work</h2>
                    <p className='css-15t5e7o'>
                        Juan is an independent Front-End Developer based in Spain with a passion for creating digital
                        services/things he wants. He has a knack for everything related to product launches, from planning and
                        design to solving real-life problems with code. When he's not online, he loves to hang out hobnobbing and
                        with her family. Currently, he is looking for a job in a company that will make him grow as a professional.
                            He will post content to market his products and his YouTube channel called "
                            <a className='text-decoration-none styleTextColor' href={YTChannel}> Easy Code </a>
                            ".
                    </p>
                </div>

                <div class="py-4 d-flex">
                    <Link to='/works' class="btn mx-auto" style={{backgroundColor: "#CD5C5C"}}>My portfolio</Link>
                </div>

                <div className='pt-4 eternal-blue'>
                    <h2 className='underline fnt-heading'>Bio</h2>
                    <div className='d-flex'>
                        <h5>2001</h5>
                        <p className='css-15t5e7o'>Born in Barahona (בראהונה), Dominican Rep.</p>
                    </div>
                    <div className='d-flex'>
                        <h5>2022</h5>
                        <p className='css-15t5e7o'>I completed my professional training in two Schools called, eLearnSecurity, 
                            in which I was certified as <a href={eJPT} className="styleTextColor">eJPT</a>, and the other called
                             FreeCodeCamp, in which I was certified in <a href={javaScript} className="styleTextColor">Javascript and Data Structures with Algorithms</a> and Reactjs.</p>
                    </div>
                </div>

                <div className='pt-4 eternal-blue'>
                    <h2 className='underline fnt-heading'>More</h2>
                    <div className='d-flex'>
                        <h5>BashTool</h5>
                        <p className='css-15t5e7o'>
                        Tool that automatically installs all the dependencies and utilities 
                        necessary to configure a custom development integer.
                        </p>
                    </div>
                </div>

                <div className='pt-4 eternal-blue'>
                    <h2 className='underline fnt-heading'>On the web</h2>
                    <div className='d-flex css-15t5e7o'>
                        <h5><FaGithubSquare /></h5>
                        <p className='css-15t5e7o'>
                            <a href='https://github.com/EasyCode0x7'>@EasyCode0x7</a>
                        </p>
                    </div>
                    <div className='d-flex css-15t5e7o'>
                        <h5><FaTwitterSquare /></h5>
                        <p className='css-15t5e7o'>
                            <a href='https://github.com/EasyCode0x7'>@EasyCode0x7</a>
                        </p>
                    </div>
                    <div className='d-flex css-15t5e7o'>
                        <h5><FaLinkedin /></h5>
                        <p className='css-15t5e7o'>
                            <a href='https://github.com/EasyCode0x7'>@EasyCode0x7</a>
                        </p>
                    </div>
                </div>

            </div>

            <div class="py-4 d-flex">
                <Link to='/posts' class="btn mx-auto" style={{backgroundColor: "#CD5C5C"}}>Popular posts</Link>
            </div>

        </div>

    )
}

export default Home;

