import React, { Component } from 'react';
import Quotes from './quote';
import './components.css';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import deved from '../images/dev.jpeg';
import { Link } from 'react-router-dom';
import '../App.css';



const Home = () => {


    const Twitter = "https://twitter.com/EasyCode0x7";
    const Linkedin = "https://www.linkedin.com/in/juan-alberto-r-santana-aka-hello-world-828a6424b/";
    const YTChannel = "https://youtube.com/@EasyCode_";
    const Github = "https://github.com/EasyCode0x7";

    {/* Certifieds */}
    const Tm = "https://www.craftz.dog/";
    const eJPT = "https://verified.elearnsecurity.com/certificates/6b4943a0-26a2-4ce7-8063-aff8e6bda825";
    const javaScript = "https://www.freecodecamp.org/certification/crashoverride0x7/javascript-algorithms-and-data-structures";


    return (

        <div>

            <div style={{paddingTop: "200px"}}>

      {/*                <div>
                  <a href='#' id='clave'>Pres here!</a>
                  <section><Quotes /></section>
                </div>
*/}
                <div className='fs22 d-flex justify-content-center rounded'>

                    Hi, I'm a Front-End developer based in Spain!

                </div>

                <div className='text-start h2-text pt-3 d-flex justify-content-between'>
                    <h2 className='fw-bold fnt-heading name-fnt'>Juan Alberto<p className="pt-2 sub-name">Digital Craftsman (/ Developer / Pentester /)</p></h2>
                    <img className='rounded-circle mLogo' src={deved} />
                </div>

                <div>
                    <hr></hr>
                    <p className='text-start fFont'>
                        Freelancer providing services for programming and ethical hacking needs.
                        Join me down below and let's get cracking!
                        Happy hacking!. Website inspired in <a 
                            href={Tm} 
                            className="styleTextColor">Takuya Matsuyama's</a> webpage.
                    </p>
                </div>

            </div>

            <div>

                <div  className='pt-5'>
                    <h2  className='underline fw-bold fnt-heading'>Work</h2>
                    <p className='css-15t5e7o'>
                        Juan is an independent Front-End Developer based in Spain with a passion for creating digital
                        services/things he wants. He has a knack for everything related to product launches, from planning and
                        design to solving real-life problems with code. When he's not online, he loves to hang out hobnobbing and
                        with her family. Currently, he is looking for a job in a company that will make him grow as a professional.
                            He will post content to market his products and his YouTube channel called "
                            <a className='styleTextColor' href={YTChannel}> Easy Code </a>
                            ".
                    </p>
                </div>

                <div className="py-4 d-flex">
                    <Link to='/works' className="btn mx-auto btn-info">My portfolio</Link>
                </div>

                <div className='pt-4'>
                    <h2 className='underline fw-bold fnt-heading'>Bio</h2>
                    <div className='d-flex'>
                        <h5 className='fWeight'>2001</h5>
                        <p className='down'>Born in Barahona ( בראהונה ), Dominican Rep.</p>
                    </div>
                    <div className='d-flex'>
                        <h5 className='fWeight'>2022</h5>
                        <p className='down'>I completed my professional training in two Schools called, eLearnSecurity, 
                            in which I was certified as <a href={eJPT} className="styleTextColor">eJPT</a>, and the other called
                             FreeCodeCamp, in which I was certified in <a href={javaScript} className="styleTextColor">Javascript Algorithms and Data Structures</a> and Reactjs.</p>
                    </div>
                </div>

                <div className='pt-4'>
                    <h2 className='underline fw-bold fnt-heading'>Brain</h2>
                    <div className='d-flex'>
                        <h5 className='fWeight'>Knowledge</h5>
                        <p className='down'>
                            Tool that automatically installs all the dependencies and utilities 
                            necessary to configure a custom development integer.\n
                            
                            <div className='pt-5 px-2 rounded' style={{background: "#282c34!important;"}}>

                                <p>const Technologies = [</p>
                                <ol>
                                    <li className='text-in'>html: "Html5 && Css3",</li>
                                    <li className='text-in'>javascript: "Javascript",</li>
                                    <li className='text-in'>react: "ReactJS",</li>
                                    <li className='text-in'>python: "Python",</li>
                                    <li className='text-in'>boostrap: "Boostrap",</li>
                                    <li className='text-in'>tailwindcss: "TailwindCss"</li>
                                </ol>
                                <p>]</p>

                            </div>
                        </p>
                    </div>
                </div>

                <div className='pt-4'>
                    <h2 className='underline fw-bold fnt-heading'>Social N-</h2>
                    <ul className='l15t5e7o socialM'>

                        <li style={{width: "55%"}}>
                            <a className='rounded social d-flex' href={Github}>
                                <span className='d-flex init align-items-center'><FaGithub/> @EasyCode0x7</span>
                            </a>
                        </li>
                        <li style={{width: "55%"}}>
                            <a className='rounded social d-flex' href={Twitter}>
                                <span className='d-flex init align-items-center'><FaTwitter /> @EasyCode0x7</span>
                            </a>
                        </li>
                        <li style={{width: "55%"}}>
                            <a className='rounded social d-flex' href={Linkedin}>
                                <span className='d-flex init align-items-center'><FaLinkedin /> @EasyCode0x7</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>

            <div className="py-4 d-flex">
                <Link to='/posts' className="btn mx-auto btn-info">Popular posts</Link>
            </div>

        </div>

    )
}

export default Home;


