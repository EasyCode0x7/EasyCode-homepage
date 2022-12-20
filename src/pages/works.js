import React, { Component } from 'react';
import '../App.css';
import inkdrop from '../images/inkdrop.png';
import inkdrop2 from '../images/inkdro2.png';



const Works = () => {


    const dev = {
        width: "100%",
        height: "80%",
        borderRadius: "20px",
    }


    return (
        <div style={{paddingTop: "120px"}}>
            <h3 className="fnt-heading">Works</h3>

            <div className='text-center dev'>

                <div>
                    <span>
                        <img style={dev} src={inkdrop}/>
                        daf
                    </span>
                </div>

                <div>
                    <span>
                        <img style={dev} src={inkdrop2}/>
                        asf
                    </span>
                </div>
                
            </div>

            <hr></hr>
            <h3>New</h3>

        </div>
    )
}

export default Works;

