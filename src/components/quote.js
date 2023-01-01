// import React, { Component }, from 'react';

const Quotes = () => {
  let api = "https://www.neutrinoapi.com/apis.json";
  
  fetch(api)
  .then( res => res.json() )
  .then( respons => console.log(respons) )

}


