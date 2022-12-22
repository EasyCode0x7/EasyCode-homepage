import React, { Component } from "react";
import { FaUssunnah } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {

    const Github = "https://github.com/EasyCode0x7/EasyCode-homepage";


    return (
        <div>

            <nav 
                path="/"
                className='principal-nav rounded'>

                <ul class="gap-3 d-flex m-0 p-0" style={{fontSize: "1.05em"}}>

                    <li>
                        <Link to="/" className="ssS fw-bold fnt-heading">DevelopedbyDe</Link>
                    </li>
                    <li class="hfs">
                        <Link to="/works" class="nav-link text-white">Works</Link>
                    </li>
                    <li class="hfs">
                        <Link to="/posts" class="nav-link text-white">Posts</Link>
                    </li>
                    <li class=" hfs">
                        <a href={Github} class="nav-link text-white"> <i class="fa-brands fa-github"></i> Source</a>
                    </li>

                    <li class="rounded list-group-item-danger">
                        <a class="text-black" href="/resume"><FaUssunnah /></a>
                    </li>

                </ul>

            </nav>
        </div>
    )
}

export default Navbar;

