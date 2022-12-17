import React, { Component } from 'react';
import { Link } from 'react-router-dom';



const Error404 = () => {

    const image404 = 'https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg';
    
    return (
        <div className="container" style={{paddingTop: "120px"}}>
            <section>
                <img className='rounded' src={image404}></img>
                <h3 className='pt-5 pb-1'>Not found</h3>
                <p>
                    The page you're looking for was not found.
                </p>
                <hr></hr>
            </section>
            <section className='d-flex justify-content-center pt-3'>
                <Link to="/" className="btn btn-outline-info">Back home</Link>
            </section>
        </div>
    )
}


export default Error404;

