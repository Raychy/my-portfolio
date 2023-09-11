import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (

        <header id="home" className="header-area">
            <div className="navigation fixed-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <Link className="navbar-brand" to="/">
                                    <img src="assets/images/logo.png" alt="logo" />
                                </Link>
                                {/* <!-- Logo --> */}
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active"><Link className="page-scroll" to="#home">Home</Link></li>
                                        <li className="nav-item"><Link className="page-scroll" to="#about">About</Link></li>
                                        {/* <li className="nav-item"><Link className="page-scroll" to="#service">Services</Link></li> */}
                                        <li className="nav-item"><Link className="page-scroll" to="#work"> Portfolio</Link></li>
                                        {/* <li className="nav-item"><Link className="page-scroll" to="#contact">Contact</Link></li> */}
                                    </ul>
                                </div>
                                {/* <!-- navbar collapse --> */}
                            </nav>
                            {/* <!-- navbar --> */}
                        </div>
                    </div>
                    {/* <!-- row --> */}
                </div>
                {/* <!-- container --> */}
            </div>
            {/* <!-- navigation --> */}

            <div id="parallax" className="header-content d-flex align-items-center">
                <div className="header-shape shape-one layer" data-depth="0.10">
                    <img src="assets/images/banner/shape/shape-1.png" alt="Shape" />
                </div>
                {/* <!-- header shape --> */}
                <div className="header-shape shape-tow layer" data-depth="0.30">
                    <img src="assets/images/banner/shape/shape-2.png" alt="Shape" />
                </div>
                {/* <!-- header shape --> */}
                <div className="header-shape shape-three layer" data-depth="0.40">
                    <img src="assets/images/banner/shape/shape-3.png" alt="Shape" />
                </div>
                {/* <!-- header shape --> */}
                <div className="header-shape shape-fore layer" data-depth="0.60">
                    <img src="assets/images/banner/shape/shape-2.png" alt="Shape" />
                </div>
                {/* <!-- header shape --> */}
                <div className="header-shape shape-five layer" data-depth="0.20">
                    <img src="assets/images/banner/shape/shape-1.png" alt="Shape" />
                </div>
                {/* <!-- header shape --> */}
                <div className="header-shape shape-six layer" data-depth="0.15">
                    <img src="assets/images/banner/shape/shape-4.png" alt="Shape" />
                </div>
                {/* <!-- header shape --> */}
                <div className="header-shape shape-seven layer" data-depth="0.50">
                    <img src="assets/images/banner/shape/shape-5.png" alt="Shape" />
                </div>
                {/* <!-- header shape --> */}
                <div className="header-shape shape-eight layer" data-depth="0.40">
                    <img src="assets/images/banner/shape/shape-3.png" alt="Shape" />
                </div>
                {/* <!-- header shape --> */}
                <div className="header-shape shape-nine layer" data-depth="0.20">
                    <img src="assets/images/banner/shape/shape-6.png" alt="Shape" />
                </div>
                {/* <!-- header shape --> */}
                <div className="header-shape shape-ten layer" data-depth="0.30">
                    <img src="assets/images/banner/shape/shape-3.png" alt="Shape" />
                </div>
                {/* <!-- header shape --> */}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="header-content-right">
                                <h4 className="sub-title">Hello, I’m</h4>
                                <h1 className="title" style={{ fontSize: '48px' }} >Adeyemi Racheal</h1>
                                <p> A passionate Frontend Developer with a keen eye for
                                detail and a love for crafting delightful user experiences. I
                                specialize in building modern and responsive web applications
                                using HTML, CSS, Bootstrap, SaSS, Tailwind CSS, Vue Js, Nuxt
                                JS, React JS, Flutter and Dart. </p>
                                <Link className="main-btn page-scroll" to="#work">View my Work</Link>
                            </div>
                            {/* <!-- header content right --> */}
                        </div>
                        <div className="col-lg-6 offset-xl-1">
                            <div className="header-image d-none d-lg-block">
                                <img src="assets/images/cyber23.png" alt="hero" style={{ width: "410px", heigth: '300px' }} />
                            </div>
                            {/* <!-- header image --> */}
                        </div>
                    </div>
                    {/* <!-- row --> */}
                </div>
                {/* <!-- container --> */}
                <div className="header-social">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-social-icon">
                                    <ul>
                                        <li><Link to="https://www.facebook.com/cyberbizkit/"><i className="lni-facebook-filled"></i></Link></li>
                                        <li><Link to="https://www.twitter.com/cyberbizkit/"><i className="lni-twitter-original"></i></Link></li>
                                        <li><Link to="https://github.com/Raychy"><i className="lni-github"></i></Link></li>
                                        <li><Link to="https://www.linkedin.com/in/cyberbizkit/"><i className="lni-linkedin-original"></i></Link></li>
                                    </ul>
                                </div>
                                {/* <!-- header social --> */}
                            </div>
                        </div>
                        {/* <!-- row --> */}
                    </div>
                    {/* <!-- container --> */}
                </div>
                {/* <!-- header social --> */}
            </div>
            {/* <!-- header content --> */}
        </header>
    )
}

export default Header
