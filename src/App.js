import './App.css';
import './stylesheet/styles.css';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import deved from './images/dev-ed-wave.png';
import buymeacoffee from './images/buymeacoffee.PNG';



function App() {

  return (
    <div className="App">

        <header>
            <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'></link>
            <link href="https://fonts.cdnfonts.com/css/signika-negative" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'></link>
        </header>

        <main id='bg' className='mx-auto bg-white px-10'>
            <section className='first-section'>

                <nav className='nav-principal d-flex align-items-center justify-content-xl-between pt-3'>
                    <h1 className='fs-5'>WebDevelopedby: <i>@crashoverride0x7</i></h1>

                    <ul className='resume d-flex pe-3 p-3 cursor-pointer justify-content-center align-items-center'>
                        <li className='pe-5 fs-4'>
                            <BsFillMoonStarsFill />
                        </li>
                        <li className='resume-text py-2 px-3 fs-6 rounded'>
                            <a className='text-white p-0 text-decoration-none' href='#'>Resume</a>
                        </li>
                    </ul>
                </nav>

                <div className='content text-center'>
                    <h2 className='h2-text pb-3 display-3'>Juan Reyes</h2>
                    <h3 className='h3-text pb-3 m-0 fs-3'>Developer and Pentester.</h3>
                    <div className='pt-3 fs-5'>
                        <p className='mx-auto py-3 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl'>
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
                    <AiFillTwitterCircle className='sobre twitter'/>
                    <AiFillLinkedin className='sobre linkedin'/>
                    <AiFillYoutube icon="fa-brands fa-youtube" className='sobre youtube'/>
                </div>
                <div className='avatar img-avatar mx-auto d-flex rounded-circle overflow-hidden'>
                    <img className='img-avatar justify-content-center align-items-center' src={deved} />
                </div>
            </section>



            <section className='w-50 blurr'>

                <h2 className='technologies-i-know py-5 fs-2'>Technologies That I Master</h2>

                <img alt='this is an pic from google' className='uno gap-5 pe-5' src='https://cdn-icons-png.flaticon.com/512/29/29515.png' />
                <img alt='this is an pic from google' className='uno gap-5 pe-5' src='https://www.svgrepo.com/show/170099/css-file-format-symbol.svg' />
                <img alt='this is an pic from google' className='uno gap-5 pe-5' src='https://cdn-icons-png.flaticon.com/512/29/29621.png' />
                <img alt='this is an pic from google' className='uno gap-5 pe-5' src='https://www.clipartmax.com/png/full/379-3794436_react-icon-react-icon.png' />
                <img alt='this is an pic from google' className='uno gap-5 pe-5' src='https://cdn-icons-png.flaticon.com/512/28/28884.png' />
                <img alt='this is an pic from google' className='uno gap-5 pe-5' src='https://miro.medium.com/max/1024/0*xoF4pubIjvqOzk3U.png' />
                <img alt='this is an pic from google' className='uno gap-5 rounded' src='https://cdn-icons-png.flaticon.com/512/52/52040.png' />

                <p className='fs-5 pt-5'>
                    Since the beginning of the path to become a software developer, I have carried out 
                    several personal projects that have not gone public.
                </p>

            </section>

            <section  className='portfolio mx-auto pt-3 fs-2'>
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



                <div className='form pb-5'>
                    <h3 className='py-4 fs-2'>Let's work together...</h3>
                    <h3 className='coffee fs-4 py-4'>-How do you take your coffee?</h3>
                    <img className='d-flex rounded new border w-50' src={buymeacoffee} />
                </div>

            </section>

            <section className='contact font-fam py-5 mx-auto'>

                <div className='shadow p-3 mb-5 bg-body rounded mx-auto'>
                    <h2 className='contact-me mx-auto d-flex py-3 fs-2 justify-content-center align-items-center'>Contact Me</h2>
                    <form className='py-2 px-10 fs-5' action='#' method='POST'>

                        <label className='p fs-4' htmlFor='name'>Name</label>
                        <input className='w-100 rounded' type="text" name='name' placeholder='Name' />
                        <label className='p fs-4' htmlFor='email'>Email</label>
                        <input className='w-100 rounded' type="email" name='email' placeholder='Email' />
                        <label className='p fs-4' htmlFor='message'>Message</label>
                        <textarea className='w-100 p-3 rounded' type="text" name='message' placeholder='How can I help you?'></textarea>

                        <button className='w-100 mt-3 fs-5' type='submit'>Submit</button>
                    </form>
                </div>
            </section>

        <footer>
            <p>By: @Denichel</p>
        </footer>

        </main>
    </div>
  );
}

export default App;


