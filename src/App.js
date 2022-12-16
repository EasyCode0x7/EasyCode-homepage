import React, { Component } from 'react';
import Work from './components/work';
import Home from './components/home';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Error404 from './pages/error404';
import Posts from './pages/posts'
import Works from './pages/works';
import "@fontsource/m-plus-rounded-1c";
import { Link, NavLink, BrowserRouter, Routes, Route, Switch } from 'react-router-dom';




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
                    <Work />
                </section>

                <footer>
                    <Footer />
                </footer>

            </main>

            <BrowserRouter>
                <Routes>
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/works" element={<Works />} />
                </Routes>
            </BrowserRouter>
        </div>

    );
  ;
}

export default App;

