import "@fontsource/m-plus-rounded-1c";
import deved from '../images/dev-ed-wave.png';
import React, { Component } from 'react';


function Head(){

    const myStyles = {
        width: '5rem',
        height: '2rem',
        display: 'flex',
        backgroundColor: '#2aa992',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return(
        <div>

            <nav path="/" className='nav-principal d-flex align-items-center justify-content-between'>
                <h2 className='fs-5 twYus'>DevelopedbyDe</h2>
                <span 
                    style={myStyles}
                    className="rounded">  
                    <a className='p-0 text-decoration-none' href='/resume'>Resume</a>
                </span>  
            </nav>

            <div className='content text-center'>

                <div className="py-5">
                    <i>
                        <p className='pt-4'>"Discovering the unexpected is more important than confirming 
                            the known."
                        </p>
                        <p>-- GeorgeBox</p>
                    </i>
                </div>

                <div className='h3-text m-0 fs22 fs-5 pt-3 pb-3 d-flex justify-content-between rounded'>
                    <span className="ps-4"><svg width="20" height="20" class="w-5 inline-block transition-transform group-hover:rotate-[20deg]" viewBox="0 0 40 40" fill="currentColor"><g transform="matrix(1.07541,0,0,1.1001,-1.05651,-0.978215)"><path fill="currentColor" d="M13.319,4.13C13.319,4.13 10.313,4.08 9.501,9.535C9.133,13.546 12.568,15.516 14.12,15.497C15.556,15.495 17.638,14.151 17.486,9.765C17.334,5.38 14.98,4.15 13.319,4.13"></path></g><path d="M3.12,15.575C2.626,16.02 0.637,18.024 3.508,22.915C6.379,27.806 8.628,23.888 8.923,23.455C9.218,23.021 11.41,20.306 8.664,16.924C5.918,13.543 3.12,15.575 3.12,15.575Z"></path><g transform="matrix(1.00722,0,0,0.981856,-0.205441,0.281328)"><path d="M24.03,4.13C22.048,4.309 20.472,5.325 20.922,9.814C21.373,14.304 24.4,15.613 25.402,15.499C26.404,15.385 28.84,12.521 28.427,9.814C28.013,7.107 26.837,4.296 24.03,4.13Z"></path></g><path d="M32.114,11.35C32.114,11.35 29.196,13.155 30.864,16.589C32.532,20.023 34.677,19.25 36,18.588C37.322,17.927 38.02,14.778 35.931,12.665C33.843,10.551 32.114,11.35 32.114,11.35Z"></path><path d="M19.212,17.136C19.212,17.136 12.651,19.306 12.84,25.174C12.888,28.022 10.569,28.548 11.073,32.567C11.727,34.322 12.649,36.92 15.89,36.85C19.131,36.781 19.603,34.354 23.377,32.97C27.151,31.586 31.009,33.828 33.802,31.213C36.596,28.598 35.188,24.468 31.876,22.731C28.564,20.995 24.793,16.327 19.212,17.136Z"></path></svg></span>
                    Hi, I'm a dominican web developer based in Spain!
                    <span className="pe-4"><svg width="20" height="20" class="w-5 inline-block transition-transform group-hover:rotate-[20deg]" viewBox="0 0 40 40" fill="currentColor"><g transform="matrix(1.07541,0,0,1.1001,-1.05651,-0.978215)"><path fill="currentColor" d="M13.319,4.13C13.319,4.13 10.313,4.08 9.501,9.535C9.133,13.546 12.568,15.516 14.12,15.497C15.556,15.495 17.638,14.151 17.486,9.765C17.334,5.38 14.98,4.15 13.319,4.13"></path></g><path d="M3.12,15.575C2.626,16.02 0.637,18.024 3.508,22.915C6.379,27.806 8.628,23.888 8.923,23.455C9.218,23.021 11.41,20.306 8.664,16.924C5.918,13.543 3.12,15.575 3.12,15.575Z"></path><g transform="matrix(1.00722,0,0,0.981856,-0.205441,0.281328)"><path d="M24.03,4.13C22.048,4.309 20.472,5.325 20.922,9.814C21.373,14.304 24.4,15.613 25.402,15.499C26.404,15.385 28.84,12.521 28.427,9.814C28.013,7.107 26.837,4.296 24.03,4.13Z"></path></g><path d="M32.114,11.35C32.114,11.35 29.196,13.155 30.864,16.589C32.532,20.023 34.677,19.25 36,18.588C37.322,17.927 38.02,14.778 35.931,12.665C33.843,10.551 32.114,11.35 32.114,11.35Z"></path><path d="M19.212,17.136C19.212,17.136 12.651,19.306 12.84,25.174C12.888,28.022 10.569,28.548 11.073,32.567C11.727,34.322 12.649,36.92 15.89,36.85C19.131,36.781 19.603,34.354 23.377,32.97C27.151,31.586 31.009,33.828 33.802,31.213C36.596,28.598 35.188,24.468 31.876,22.731C28.564,20.995 24.793,16.327 19.212,17.136Z"></path></svg></span>
                </div>

                <div className='h2-text pt-5 fs-1 d-flex justify-content-between'>
                    <h2 className='float-start'>Juan Alberto</h2>
                    <img className='avatar mx-auto rounded-circle overflow-hidden fs-2 float-end' src={deved} />
                </div>

                <div className='fs-5 w-50'>
                    <p className='wxTrs'>
                        Freelancer providing services for programming and ethical hacking needs.
                        Join me down below and let's get cracking!
                        Happy hacking!
                    </p>
                </div>

            </div>

            <div className='identificator gap-5 py-5 d-flex display-4 align-items-center h-50 w-50'>
                <a href="https://twitter.com/"><i class="fa-brands fa-twitter sobre twitter"></i></a>
                <a href="https://linkedin.com/"><i class="fa-brands fa-linkedin sobre linkedin"></i></a>
                <a href="https://youtube.com/"><i class="fa-brands fa-youtube sobre youtube"></i></a>
            </div>

        </div>
    )
}

export default Head;
