import React, { Component } from "react";
import Error404 from '../pages/error404';
import Posts from '../pages/posts'
import Works from '../pages/works';
import { Routes, Route } from 'react-router-dom';
import Home from "./home";



function Routed() {

    return (

        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/404" element={<Error404 />} />
            </Routes>
        </div>
    )
}

export default Routed;

