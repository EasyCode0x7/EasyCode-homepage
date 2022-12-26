import React, { Component } from "react";
import '../App';



const Change = () => {

    const lightTheme = [
        {
        text: "#1a202c",
        toggle: "#757575",
        hover: "#0085FF",
        bgc: "#f0e7db",
        }
    ];
    
    const darkTheme = [
        {
        text: "#eeeeee",
        toggle: "#0085FF",
        hover: "#00D4FF",
        bgc: "#202023",
        }
    ];

    let sunMoon = document.getElementById('bg')
    
        
    return lightTheme
    .map(element => sunMoon.style.backgroundColor = element.bgc);

    
}

export default Change;


