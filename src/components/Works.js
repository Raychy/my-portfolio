import React from 'react'
// import { Link } from "react-router-dom";

const Works = () => {
    return (
        <section id="work" className="work-area pt-125 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title pb-25">
                            <h2 className="title">My Portfolio</h2>

                        </div>
                        {/* <!-- section title --> */}
                    </div>
                </div>
                {/* <!-- row --> */}
                {/* <div>
                    <i className='lni-chevron-left'></i> &nbsp;&nbsp;
                    <i className='lni-chevron-right'></i>
                </div> */}
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-work text-center mt-30">
                            <div className="work-image">
                                <img src="assets/images/weather-app.png" alt="work" style={{ height: '300px' }}/>
                            </div>
                            <div className="work-overlay">
                                <div className="work-content">
                                    <h3 className="work-title">Weather forecast App</h3>
                                    <ul>
                                        <li><a className="image-popup" href="assets/images/weather.PNG" target='_blank'><i className="lni-plus"></i></a></li>
                                        <li><a href="https://weatherr-web-app.netlify.app/" target='_blank'><i className="lni-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- single work --> */}
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-work text-center mt-30">
                            <div className="work-image">
                                <img src="assets/images/sleep-tracker.png" alt="work" style={{ height: '300px' }} />
                            </div>
                            <div className="work-overlay">
                                <div className="work-content">
                                    <h3 className="work-title">A sleep tracker system</h3>
                                    <p className="work-titl" style={{color:'white', marginTop:'-20px'}}>(Vue JS, Firebase)</p>
                                    <ul>
                                        <li><a className="image-popup" href="assets/images/tracker.PNG"  target='_blank'><i className="lni-plus"></i></a></li>
                                        <li><a href="https://dailysleeptrack.netlify.app/" target='_blank'><i className="lni-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- single work --> */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-work text-center mt-30">
                            <div className="work-image">
                                <img src="assets/images/gall.png" alt="work" style={{ height: '300px' }} />
                            </div>
                            <div className="work-overlay">
                                <div className="work-content">
                                    <h3 className="work-title">An Image gallery using Unsplash Image API</h3>
                                    <p className="work-titl" style={{color:'white', marginTop:'-20px'}}>(Vue JS, Unsplash Image API)</p>
                                    <ul>
                                        <li><a className="image-popup" href="assets/images/gallery.png" target='_blank'><i className="lni-plus"></i></a></li>
                                        <li><a href="https://photo-galleries.netlify.app" target='_blank'><i className="lni-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- single work --> */}
                    </div>


                </div>
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-work text-center mt-30">
                            <div className="work-image">
                                <img src="assets/images/clone-website.png" alt="website-clone" style={{ height: '300px' }} />
                            </div>
                            <div className="work-overlay">
                                <div className="work-content">
                                    <h3 className="work-title">A cloned Business website</h3>
                                    <p className="work-titl" style={{color:'white', marginTop:'-20px'}}>(TailwindCss, Nuxt JS)</p>
                                    <ul>
                                        <li><a className="image-popup" href="assets/images/website-clone.PNG" target='_blank'><i className="lni-plus"></i></a></li>
                                        <li><a href="https://github.com/Raychy/brand-website" target='_blank'><i className="lni-link"></i></a></li>
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
                                <img src="assets/images/art.jpg" alt="work" style={{ height: '300px' }} />
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
                                <img src="assets/images/go.jpg" alt="work" style={{ height: '300px' }} />
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
                    


                </div>
                {/* <!-- row --> */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="work-more text-center mt-50">
                            <a className="main-btn" href="assets/images/racheal.pdf" download="racheal-adeyemi.pdf">more works</a>
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
