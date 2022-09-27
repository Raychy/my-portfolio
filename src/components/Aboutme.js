import React from 'react'

const Aboutme = () => {
    return (
        <section id="about" className="about-area pt-125 pb-130">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <h2 className="title">About Me</h2>

                        </div>
                        {/* <!-- section title --> */}
                    </div>
                </div>
                {/* <!-- row --> */}
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-content mt-50">
                            <h5 className="about-title">Hi There! I'm Adeyemi Racheal Oyindamola</h5>
                            <p>I started my  tech career path when I was in School (Federal Polytechnic Ilaro, Ogun State) in 2016 studying Computer Science  and ever since then I've built so much passion for it.
                                I started as a Front-end developer (HTML, CSS, JAVASCRIPT, JQUERY, REACTJS ) and added Mobile App developement using Flutter Framework and Dart. 
                                </p>
                            <p>I've been able to work with team to develop both Web applications and Mobile Application. </p>

                        </div>
                        {/* <!-- about content --> */}
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                        <div className="about-skills pt-25">
                            <div className="skill-item mt-25">
                                <div className="skill-header">
                                    <h6 className="skill-title">HTML</h6>
                                    <div className="skill-percentage">
                                        <div className="count-box counted">
                                            <span className="counter">100</span>
                                        </div>
                                        %
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar-inner">
                                        <div className="bar progress-line" data-width="80"></div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- skill item --> */}
                            <div className="skill-item mt-25">
                                <div className="skill-header">
                                    <h6 className="skill-title">CSS</h6>
                                    <div className="skill-percentage">
                                        <div className="count-box counted">
                                            <span className="counter">100</span>
                                        </div>
                                        %
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar-inner">
                                        <div className="bar progress-line" data-width="60"></div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- skill item --> */}
                            <div className="skill-item mt-25">
                                <div className="skill-header">
                                    <h6 className="skill-title">Javascript </h6>
                                    <div className="skill-percentage">
                                        <div className="count-box counted">
                                            <span className="counter">70</span>
                                        </div>
                                        %
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar-inner">
                                        <div className="bar progress-line" data-width="50"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-item mt-25">
                                <div className="skill-header">
                                    <h6 className="skill-title">ReactJS</h6>
                                    <div className="skill-percentage">
                                        <div className="count-box counted">
                                            <span className="counter">70</span>
                                        </div>
                                        %
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar-inner">
                                        <div className="bar progress-line" data-width="50"></div>
                                    </div>
                                </div>
                            </div>
                            {/*
                     <!-- skill item --> */}
                            <div className="skill-item mt-25">
                                <div className="skill-header">
                                    <h6 className="skill-title">Flutter & Dart</h6>
                                    <div className="skill-percentage">
                                        <div className="count-box counted">
                                            <span className="counter">90</span>
                                        </div>
                                        %
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar-inner">
                                        <div className="bar progress-line" data-width="90"></div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- skill item --> */}
                        </div>
                        {/* <!-- about skills --> */}
                    </div>
                </div>
                {/* <!-- row --> */}
            </div>
            {/* <!-- container --> */}
        </section>
    )
}

export default Aboutme
