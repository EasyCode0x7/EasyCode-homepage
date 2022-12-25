import React, { Component } from "react";
import { HiOutlineSun } from "react-icons/hi";
import { Link } from 'react-router-dom';



export default function Navbar() {

    const Github = "https://github.com/EasyCode0x7/EasyCode-homepage";

    const navPrincipal = {
        display: "flex",
        position: "fixed",
        background: "#20202380",
        backdropFilter: "blur(15px)",
        padding: "15px",
        left: "0",
        width: "100%",
        justifyContent: "center"
    }

    const ulContainer = {
        display: "flex",
        alignItems: "center",
        fontSize: "1.05em",
        margin: "0",
        padding: "0",
        position: "relative",
    }

    const bsSun = {
        background: "rgba(251, 211, 141, 1)",
        borderRadius: "5px",
        width: "40px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }


    return (
        <div>

            <nav 
                path="/"
                className='rounded'
                style={navPrincipal}>

                <ul className="gap-3" style={ulContainer}>

                    <li>
                        <Link to="/" className="ssS fw-bold fnt-heading">DevelopedbyDe</Link>
                    </li>

                    <li className="hfs" style={{marginLeft: "100px"}}>
                        <Link to="/works" className="nav-link">Works</Link>
                    </li>

                    <li className="hfs mx-3">
                        <Link to="/posts" className="nav-link">Posts</Link>
                    </li>

                    <li className=" hfs">
                        <a href={Github} className="nav-link"> <i className="fa-brands fa-github"></i> Source</a>
                    </li>

                </ul>

                <div style={{width: "350px"}}></div>

                <ul className="m-0 p-0">
                    <li style={bsSun}>
                        <a id="change" href="#darkmode" className="text-black d-flex fs-5"><HiOutlineSun /></a>
                    </li>
                </ul>


            </nav>
        </div>
    )
}

