import Work from './components/Work';
import Header from './components/Header';
import Footer from './components/Footer';
import Head from './components/Head';
import "@fontsource/m-plus-rounded-1c";
import React, { Component } from 'react';




function App() {

    return (
        <div className="App bg-color container-sm">

            <header>
                <Header />
            </header>

            <main id='bg'>
                <section className='first-section'>
                    <Head />
                </section>

                <section className='blurr'>
                    <Work />
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


