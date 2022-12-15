import React, { Component } from 'react';
import Works from './components/Works';
import Home from './components/Home';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import "@fontsource/m-plus-rounded-1c";
import { Link, NavLink, Router, Route } from 'react-router-dom';




function App() {

    return (
        <div className="App bg-color container-sm">

            <header>
                <link href="https://fonts.cdnfonts.com/css/vt323" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"></link>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'></link>
            </header>

            <main id='bg'>
                <section className='first-section'>
                    <Home />
                </section>

                <section className='blurr'>
                    <Works />
                </section>

                <footer>
                    <Footer />
                </footer>

            </main>
                   
        </div>
    );
  ;
}

export default App;

