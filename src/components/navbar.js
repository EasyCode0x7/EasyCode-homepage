import React, { Component } from "react";
import './components.css';
import { HiOutlineSun } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Change from './setMode';



export default function Navbar() {

    const Github = "https://github.com/EasyCode0x7/EasyCode-homepage";


    return (
        <div>

            <nav 
                path="/"
                className='rounded navPrincipal'>

                <ul className="gap-3 ulContainer">

                    <li>
                        <Link to="/" className="ssS fw-bold fnt-heading">DevelopedbyDe</Link>
                    </li>

                    <li className="hfs" style={{marginLeft: "90px"}}>
                        <Link to="/works" className="nav-link">Works</Link>
                    </li>

                    <li className="hfs mx-2">
                        <Link to="/posts" className="nav-link">Posts</Link>
                    </li>

                    <li className="hfs">
                        <a href={Github} className="nav-link float-left" style={{width: "150%"}}><i className="fa-brands fa-github"></i> Source</a>
                    </li>

                </ul>

                <section style={{width: "350px"}}></section>

                <ul className="m-0 p-0 d-flex align-items-center" style={{cursor: "pointer"}}>
                    <li className="bsSunMoon">
                        <a href="#darkmode" className="text-black d-flex fs-5 sunMoon" onClick={Change}><HiOutlineSun /></a>
                    </li>
                </ul>

            </nav>

        </div>
    )
}


