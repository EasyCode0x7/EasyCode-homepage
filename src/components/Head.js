import React from "react";
import deved from '../images/dev-ed-wave.png';


function Head(){

    return(
        <div>

            <nav className='nav-principal d-flex align-items-center justify-content-xl-between pt-3'>
                <h1 className='fs-5 twYus text-light'>Developedby - @crashoverride0x7</h1>
                <ul className='resume d-flex pe-3 p-3 justify-content-center align-items-center'>
                    <li>
                        <a href="#">Hola</a>
                    </li>
                    <li className='resume-text py-2 px-3 fs-6 rounded'>
                        <a className='text-light p-0 text-decoration-none' href='#technologies-i-know'>Resume</a>
                    </li>
                </ul>
            </nav>

            <div className='content text-center'>
                <h2 className='h2-text pb-3 display-5 text-light'>Juan Alberto</h2>
                <h3 className='h3-text pb-3 m-0 fs-1 text-light'>Junior Frontend Developer.</h3>
                <div className='fs-6'>
                    <p className='text-light wxTrs mx-auto py-3'>
                        Freelancer providing services for programming and ethical hacking needs.
                        Join me down below and let's get cracking!
                        Happy hacking!
                        <br></br><br></br>
                        <i>

                        <b>"</b>Discovering the unexpected is more important than confirming 
                        the known.<b>"</b>

                        <br></br><b>--George Box</b>
                        </i>
                    </p>
                </div>

            </div>

            <div className='identificator gap-5 py-5 d-flex mx-auto display-2 justify-content-center align-items-center'>
                <a href="https://twitter.com"><i class="fa-brands fa-twitter sobre twitter"></i></a>
                <a href="https://linkedin.com"><i class="fa-brands fa-linkedin sobre linkedin"></i></a>
                <a href="https://youtube.com"><i class="fa-brands fa-youtube sobre youtube"></i></a>
            </div>

            <div className='avatar img-avatar mx-auto d-flex rounded-circle overflow-hidden'>
                <img className='img-avatar w-100 justify-content-center align-items-center' src={deved} />
            </div>

        </div>
    )
}

export default Head;
