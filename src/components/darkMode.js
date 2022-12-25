import React, { Component } from 'react';
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";



const LightTheme = [{
    text: "#1a202c",
    toggle: "#757575",
    hover: "#0085FF",
    bgc: "#f0e7db",
}];

const DarkTheme = [{
    text: "#eeeeee",
    toggle: "#0085FF",
    hover: "#00D4FF",
    bgc: "#202023",
}];


const Themes = {
    
    return LightTheme.map(response => response.json)
}

export default Themes;