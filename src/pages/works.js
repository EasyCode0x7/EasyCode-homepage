import React, { Component } from 'react';
import '../App.css';
import inkdrop from '../images/inkdrop.png';
import inkdrop2 from '../images/inkdro2.png';



const Works = () => {


    const dev = {

        
    }


    return (
        <div className="container" style={{paddingTop: "120px"}}>
            <h3 className="fnt-heading">Works</h3>

            <div className='dev'>
                <img className='w-50 h-50' src={inkdrop}></img>
                <img className='w-50 h-50' src={inkdrop2}></img>
            </div>
        </div>
    )
}

export default Works;

