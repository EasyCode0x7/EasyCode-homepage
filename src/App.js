import React, { Component } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import "@fontsource/m-plus-rounded-1c";
import Routed from './components/routes';



function App() {

    return (

        <div className="App bg-color container-sm">

            <header>
                <link href="https://fonts.cdnfonts.com/css/vt323" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"></link>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'></link>
            </header>

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


