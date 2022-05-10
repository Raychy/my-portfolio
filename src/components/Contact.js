import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="contact-area pt-125 pb-130 gray-bg">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title text-center pb-25">
                        <h2 className="title">Get In Touch</h2>
                        <p>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo.</p>
                    </div>
                     {/* <!-- section title --> */}
                </div>
            </div> 
            {/* <!-- row --> */}
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-7">
                    <div className="contact-box text-center mt-30">
                        <div className="contact-icon">
                            <i className="lni-map-marker"></i>
                        </div>
                        <div className="contact-content">
                            <h6 className="contact-title">Address</h6>
                            <p>123 Stree New York City , United States Of America 750</p>
                        </div>
                    </div> 
                    {/* <!-- contact box --> */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-7">
                    <div className="contact-box text-center mt-30">
                        <div className="contact-icon">
                            <i className="lni-phone"></i>
                        </div>
                        <div className="contact-content">
                            <h6 className="contact-title">Phone</h6>
                            <p>+931 2222 5555</p>
                            <p>+547 5554 6663</p>
                        </div>
                    </div> 
                    {/* <!-- contact box --> */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-7">
                    <div className="contact-box text-center mt-30">
                        <div className="contact-icon">
                            <i className="lni-envelope"></i>
                        </div>
                        <div className="contact-content">
                            <h6 className="contact-title">Email</h6>
                            <p>support@yourmail.com</p>
                            <p>info@helpline.com</p>
                        </div>
                    </div> 
                    {/* <!-- contact box --> */}
                </div>
            </div> 
            {/* <!-- row --> */}
            <div className="row">
                <div className="col-lg-6">
                    <div className="contact-form pt-30">
                        <form id="contact-form" action="assets/contact.php">
                            <div className="single-form">
                                <input type="text" name="name" placeholder="Name" />
                            </div>
                             {/* <!-- single form --> */}
                            <div className="single-form">
                                <input type="email" name="email" placeholder="Email" />
                            </div>
                             {/* <!-- single form --> */}
                            <div className="single-form">
                                <textarea name="message" placeholder="Message"></textarea>
                            </div>
                             {/* <!-- single form --> */}
                            <p className="form-message"></p>
                            <div className="single-form">
                                <button className="main-btn" type="submit">Send Message</button>
                            </div>
                             {/* <!-- single form --> */}
                        </form>
                    </div>
                     {/* <!-- contact form --> */}
                </div>
                <div className="col-lg-6">
                    <div className="contact-map mt-60">
                        <div className="gmap_canvas">                            
                            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                     {/* <!-- contact map --> */}
                </div>
            </div>
             {/* <!-- row --> */}
        </div> 
        {/* <!-- container --> */}
    </section>
    )
}

export default Contact
