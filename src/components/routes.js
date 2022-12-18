import React, { Component } from "react";
import Error404 from '../pages/error404';
import Posts from '../pages/posts'
import Works from '../pages/works';
import Home from "./home";
import { Routes, Route, Navigate } from 'react-router-dom';



const Routed = () => {

    return (

        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Navigate to="/" />} />
                <Route exact path="/works" element={<Works />} />
                <Route exact path="/posts" element={<Posts />} />
                <Route exact path="*" element={<Error404 />} />
            </Routes>
        </div>
    )
}

export default Routed;

