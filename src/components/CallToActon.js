import React from 'react'

const CallToActon = () => {
    return (
        <section id="call-to-action" className="call-to-action pt-125 pb-130 bg_cover" style={{backgroundImage: 'url(assets/images/call-to-action.jpg)'}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-9">
                    <div className="call-action-content text-center">
                        <h2 className="action-title">Have any project on mind?</h2>
                        <p>Why not hire me now </p>
                        <ul>
                            <li><a className="main-btn custom" href="assets/images/adeyemi_racheal.pdf" download = "racheal-adeyemi.pdf">download cv</a></li>
                            <li><a className="main-btn custom-2" href="tel:+234-813-069-2014">hire me</a></li>
                        </ul>
                    </div>
                     {/* <!-- call action content --> */}
                </div>
            </div> 
            {/* <!-- row --> */}
        </div> 
        {/* <!-- container --> */}
        {/* Adeyemi-Racheal */}
        {/* <a className="button" href="../assets/Resume/ResumeOfficial.pdf" download = "ResumeOfficial.pdf">
      Download Resume
    </a> */}
    </section>
    )
}

export default CallToActon
