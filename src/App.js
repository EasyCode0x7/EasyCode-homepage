import React, { Component } from 'react';
import Header from './components/Header';
import Works from './components/Works';
import Home from './components/Home';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import { Link, NavLink, Router, Route } from 'react-router-dom';




function App() {

    return (
        <div className="App bg-color container-sm">

            <header>
                <Header />
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


