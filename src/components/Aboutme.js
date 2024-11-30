import React from "react";
import ScriptTag from "react-script-tag";

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
          <div className="col-lg-12">
            <div className="about-content mt-50">
              {/* <h5 className="about-title">
                Hi There! I'm  Racheal Adeyemi
              </h5> */}
              <p className="text-justify">
                I am a highly skilled front-end developer with over 5 years of
                experience crafting scalable, responsive, intuitive web and
                mobile applications. My expertise lies in Vue.js, Nuxt.js,
                Flutter, and modern frontend technologies, paired with a deep
                understanding of design principles, seamless API integration,
                and efficient state management. I thrive in agile environments
                where collaboration and creativity drive results, delivering
                exceptional experiences that make an impact. Committed to
                continuous learning, I stay ahead of technology trends to ensure
                my work remains cutting-edge and future-proof.
              </p>
             
             
            </div>
            {/* <!-- about content --> */}
          </div>
          {/* <div className="col-xl-5 offset-xl-1 col-lg-6">
     
          </div> */}
        </div>
        {/* <!-- row --> */}
      </div>
      <ScriptTag
        isHydrating={true}
        type="text/javascript"
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      />

      <ScriptTag type="text/javascript" src="./assets/images/main.js" />
      {/* <!-- container --> */}
    </section>
  );
};

export default Aboutme;
