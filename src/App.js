import React, { Component, useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import "@fontsource/m-plus-rounded-1c";
import Routed from './components/routes';




const App = () => {

{/*    const [darkMode, setDarkMode] = useState; */}

    return (

        <div className="App container-sm">

            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"></link>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'></link>
                <title>Juan Alberto - Homepage</title>
            </head>

            <main id='bg'>

                <Navbar />
                <Routed />

            </main>

            <footer>
                <Footer />
            </footer>

        </div>

    );
  ;
}

export default App;

