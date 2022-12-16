import React, { Component } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Navbar = () => {

    const Github = "https://github.com/EasyCode0x7/EasyCode-homepage";

    return (
        <div>
            <nav path="/" className='navbar principal-nav rounded fixed-top navbar-expand-lg justify-content-evenly'>
                <Link 
                    to="/" 
                    className="ssS fw-bolder text-white">
                        DevelopedbyDe
                </Link>

                <ul class="navbar-nav nav-pills gap-3" style={{fontSize: "1.05em"}}>
                    <li class="nav-item hfs">
                        <Link to="/works" class="nav-link text-white">Works</Link>
                    </li>
                    <li class="nav-item hfs">
                        <Link to="/posts" class="nav-link text-white">Posts</Link>
                    </li>
                    <li class=" hfs">
                        <a href={Github} class="nav-link text-white"> <i class="fa-brands fa-github"></i> Source</a>
                    </li>
                </ul>

                <ul className='nav nav-pills'>
                    <li class="nav-item rounded list-group-item-warning">
                        <a class="nav-link pt-1 text-danger" href="/resume"><BsFillSunFill /></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;

