import React, { Component } from "react";
import '../App.css';
import inkdrop from '../images/inkdrop.png';
import inkdrop2 from '../images/inkdro2.png';


const Posts = () => {

    return (
        <div style={{paddingTop: "120px"}}>
            <h3 className="fnt-heading">Posts</h3>

            <section className='text-center d-flex gap-3'>

                <div className='w-100'>
                    <img className="rounded w-100 pb-2" src={inkdrop}/>
                    <span>
                       post 1
                    </span>
                </div>

                <div className='w-100'>
                    <img className="rounded w-100 pb-2" src={inkdrop2}/>
                    <span>
                       post 2
                    </span>
                </div>
                
            </section>

            <section className='text-center d-flex gap-3 pt-4'>

                <div className='w-100'>
                    <img className="rounded w-100 pb-2" src={inkdrop}/>
                    <span>
                       post 3
                    </span>
                </div>

                <div className='w-100'>
                    <img className="rounded w-100 pb-2" src={inkdrop2}/>
                    <span>
                       post 4
                    </span>
                </div>

            </section>

            <hr></hr>
            <h3>New</h3>

        </div>
    )
}

export default Posts;


