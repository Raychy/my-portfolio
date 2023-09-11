import React from 'react'
import ScriptTag from 'react-script-tag';

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
                            <p>
                                A passionate Frontend Developer with a keen eye for
                                detail and a love for crafting delightful user experiences. I
                                specialize in building modern and responsive web applications
                                using HTML, CSS, Bootstrap, SaSS, Tailwind CSS, Vue Js, Nuxt
                                JS, React JS, Flutter and Dart.
                            </p>
                            <p>
                                With 4 years of experience in the industry, I have
                                successfully delivered user-centric projects and collaborated
                                with cross-functional teams to bring designs to life. My
                                expertise in Frontend tools empowers me to create dynamic,
                                interactive, and performant applications while ensuring clean
                                and maintainable code.
                            </p>
                            <p>I graduated with a degree in Computer Science, I am deeply committed to honing my technical skills and broadening my knowledge.
                                I actively contribute to the developer community through tech trainings
                                and participating in open-source projects.</p>

                        </div>
                        {/* <!-- about content --> */}
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                        <div className="about-skills pt-25">
                            <div className="skill-item mt-25">
                                <div className="skill-header">
                                    <h6 className="skill-title">HTML & CSS</h6>
                                    <div className="skill-percentage">
                                        <div className="count-box counted">
                                            <span className="counter">100</span>
                                        </div>
                                        %
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar-inner">
                                        <div className="bar progress-line progress-line-100" data-width="80"></div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- skill item --> */}
                            <div className="skill-item mt-25">
                                <div className="skill-header">
                                    <h6 className="skill-title">TailwindCSS</h6>
                                    <div className="skill-percentage">
                                        <div className="count-box counted">
                                            <span className="counter">100</span>
                                        </div>
                                        %
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar-inner">
                                        <div className="bar progress-line progress-line-100" data-width="60"></div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- skill item --> */}
                            <div className="skill-item mt-25">
                                <div className="skill-header">
                                    <h6 className="skill-title">Javascript </h6>
                                    <div className="skill-percentage">
                                        <div className="count-box counted">
                                            <span className="counter">90</span>
                                        </div>
                                        %
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar-inner">
                                        <div className="bar progress-line progress-line-90" data-width="50"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-item mt-25">
                                <div className="skill-header">
                                    <h6 className="skill-title">VueJS</h6>
                                    <div className="skill-percentage">
                                        <div className="count-box counted">
                                            <span className="counter">80</span>
                                        </div>
                                        %
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar-inner">
                                        <div className="bar progress-line progress-line-80" data-width="50"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-item mt-25">
                                <div className="skill-header">
                                    <h6 className="skill-title">ReactJS</h6>
                                    <div className="skill-percentage">
                                        <div className="count-box counted">
                                            <span className="counter">80</span>
                                        </div>
                                        %
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar-inner">
                                        <div className="bar progress-line progress-line-80" data-width="80"></div>
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
                                        <div className="bar progress-line progress-line-90" data-width="90"></div>
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
            <ScriptTag isHydrating={true} type="text/javascript"
                src=
                "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />

            <ScriptTag type="text/javascript" src="./assets/images/main.js" />
            {/* <!-- container --> */}
        </section>

    )
}

export default Aboutme
