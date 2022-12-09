import ContactMe from './components/ContactMe';
import ServicesIoffer from './components/ServicesIoffer';
import Technologies from './components/Technologies';
import Header from './components/Header';
import Footer from './components/Footer';
import Head from './components/Head';



function App() {

    return (
        <div className="App">

            <header>
                <Header />
            </header>

            <main id='bg' className='mx-auto bg-white px-10'>
                <section className='first-section'>
                    <Head />
                </section>

                <section className='w-50 blurr'>
                    <Technologies />
                </section>

                <section  className='portfolio mx-auto pt-3 fs-2'>
                    <ServicesIoffer />
                </section>

                <section className='contact font-fam py-5 mx-auto'>
                    <ContactMe />
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


