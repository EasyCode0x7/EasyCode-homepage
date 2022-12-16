import React, { Component } from "react";
import { BsFillSunFill } from "react-icons/bs";


const Navbar = () => {

    const Github = "https://github.com/EasyCode0x7/EasyCode-homepage";

    return (
        <div>
            <nav path="/" className='navbar principal-nav rounded fixed-top navbar-expand-lg justify-content-evenly'>
                <a 
                    href="/" 
                    className="ssS fw-bolder text-white">
                        DevelopedbyDe
                </a>

                <ul class="navbar-nav nav-pills gap-3" style={{fontSize: "1.05em"}}>
                    <li class="nav-item hfs">
                        <a class="nav-link text-white" href="/works">Works</a>
                    </li>
                    <li class="nav-item hfs">
                        <a class="nav-link text-white" href="/posts">Posts</a>
                    </li>
                    <li class=" hfs">
                        <a class="nav-link text-white" href={Github}> <i class="fa-brands fa-github"></i> Source</a>
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