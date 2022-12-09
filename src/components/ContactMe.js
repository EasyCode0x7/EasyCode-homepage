import React from "react";
import '../App.css';
import '../stylesheet/styles.css';

function ContactMe() {

    return (
        <div>

            <div className='shadow p-3 mb-5 bg-white shadow-lg rounded mx-auto'>
                <h2 className='contact-me mx-auto d-flex py-3 fs-2 justify-content-center align-items-center'>Contact Me</h2>
                <form className='py-2 px-10 fs-6' action='#' method='POST'>

                    <label className='p fs-5' htmlFor='name'>Name</label>
                    <input className='w-100 rounded' type="text" name='name' placeholder='Name' />
                    <label className='p fs-5' htmlFor='email'>Email</label>
                    <input className='w-100 rounded' type="email" name='email' placeholder='Email' />
                    <label className='p fs-5' htmlFor='message'>Message</label>
                    <textarea className='w-100 p-3 rounded' type="text" name='message' placeholder='How can I help you?'></textarea>

                    <button className='w-100 mt-3 fs-5' type='submit'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default ContactMe;
