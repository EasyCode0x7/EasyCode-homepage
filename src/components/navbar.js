import React, { Component } from "react";
import { FaRegSun } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {

    const Github = "https://github.com/EasyCode0x7/EasyCode-homepage";

    return (
        <div>

            <nav 
                path="/" 
                className='navbar principal-nav rounded fixed-top navbar-expand justify-content-evenly'>

                <Link 
                    to="/" 
                    className="ssS fw-bold fnt-heading">
                        DevelopedbyDe
                </Link>

                <ul class="navbar-nav gap-3" style={{fontSize: "1.05em"}}>

                    <li class="hfs">
                        <Link to="/works" class="nav-link text-white">Works</Link>
                    </li>
                    <li class="hfs">
                        <Link to="/posts" class="nav-link text-white">Posts</Link>
                    </li>
                    <li class=" hfs">
                        <a href={Github} class="nav-link text-white"> <i class="fa-brands fa-github"></i> Source</a>
                    </li>

                </ul>

                <div class="rounded list-group-item-warning">
                    <a class="nav-link text-black m-2" href="/resume"><FaRegSun /></a>
                </div>

            </nav>
        </div>
    )
}

export default Navbar;

