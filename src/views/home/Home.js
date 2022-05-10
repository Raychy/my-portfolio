import React from 'react'
import { Link } from "react-router-dom";
import Preloader from '../../components/Preloader'
import Header from '../../components/Header'
import Aboutme from '../../components/Aboutme'
// import Services from '../../components/Services'
import CallToActon from '../../components/CallToActon'
import Works from '../../components/Works'
// import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

const Home = () => {
    return (
        <>

            <Preloader />
            <Header />

            <Aboutme />

            {/* <Services /> */}

            < CallToActon />

            <Works />

            {/* <Contact /> */}


            <Footer />

            {/* <Link to="/" className="back-to-top"><i className="lni-chevron-up"></i></Link> */}
            <a href="#" className="back-to-top page-scroll"><i className="lni-chevron-up"></i></a>


        </>
    )
}

export default Home
