import ServicesIoffer from './components/ServicesIoffer';
import Technologies from './components/Technologies';
import Header from './components/Header';
import Footer from './components/Footer';
import Head from './components/Head';
import "@fontsource/m-plus-rounded-1c";
import React, { Component } from 'react';




function App() {

    return (
        <div className="App bg-color container">

            <header>
                <Header />
            </header>

            <main id='bg' className='px-5'>
                <section className='first-section'>
                    <Head />
                </section>

                <section className='w-50 blurr'>
                    <Technologies />
                </section>

                <section  className='portfolio mx-auto pt-3 fs-2'>
                    <ServicesIoffer />
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


