import React from 'react'
import { Link } from "react-router-dom";

const Works = () => {
    return (
        <section id="work" className="work-area pt-125 pb-130">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="section-title pb-25">
                        <h2 className="title">My Portfolio</h2>
                      
                    </div>
                     {/* <!-- section title --> */}
                </div>
            </div> 
            {/* <!-- row --> */}
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-work text-center mt-30">
                        <div className="work-image">
                            <img src="assets/images/art.jpg" alt="work" style={{height:'360px'}}/>
                        </div>
                        <div className="work-overlay">
                            <div className="work-content">
                                <h3 className="work-title">Artisan Community App</h3>
                                <ul>
                                    <li><a className="image-popup" href="assets/images/art.jpg"><i className="lni-plus"></i></a></li>
                                    <li><a href="https://github.com/Raychy/artisans_community"><i className="lni-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     {/*
                    //   <!-- single work --> */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-work text-center mt-30">
                        <div className="work-image">
                            <img src="assets/images/go.jpg" alt="work" style={{height:'360px'}}/>
                        </div>
                        <div className="work-overlay">
                            <div className="work-content">
                                <h3 className="work-title">Gospel Unites App</h3>
                                <ul>
                                    <li><a className="image-popup" href="assets/images/go.jpg"><i className="lni-plus"></i></a></li>
                                    <li><a href="https://play.google.com/store/apps/details?id=io.devcareer.gospel_unites"><i className="lni-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     {/* <!-- single work --> */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-work text-center mt-30">
                        <div className="work-image">
                            <img src="assets/images/work/w-3.jpg" alt="work" />
                        </div>
                        <div className="work-overlay">
                            <div className="work-content">
                                <h3 className="work-title">Calculator Made with VueJS</h3>
                                <ul>
                                    <li><a className="image-popup" href="assets/images/work/w-3.jpg"><i className="lni-plus"></i></a></li>
                                    <li><a href="https://github.com/Raychy/Calculator_made_with_vue"><i className="lni-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     {/* <!-- single work --> */}
                </div>
                
              
            </div> 
            {/* <!-- row --> */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="work-more text-center mt-50">
                        <a className="main-btn" href="https://github.com/Raychy/">more works</a>
                    </div> 
                    {/* <!-- work more --> */}
                </div>
            </div> 
            {/* <!-- row --> */}
        </div> 
        {/* <!-- container --> */}
    </section>
    )
}

export default Works
