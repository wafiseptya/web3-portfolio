import React, { Component } from 'react';


class About extends Component {

  render(){
    return(
        <section id="intro_content_sec" className="col-lg-10 col-md-11 col-sm-11 center-div intro-content-wrap sec-pad">
            <div className="person-img margin-bottom-xs" />
            <h1>
              Hello! I am Wafi. Web Developer<span id="typed" />
            </h1>
            <h6>
              about
            </h6>
            <p className="pad-bottom-35 wow fadeInUp" data-wow-duration=".6s" align="justify">
              I am highly skiled person who has developed a mature and responsible approach to any task that i undertake, or situation that i am presented eith. Currently taking Diploma in Computers Information System. I am enthusiastic about learning new things, especially about computer. Currently focusing on Web Development as Front-End and Back-End.
            </p>
            <p className="wow fadeInUp" data-wow-duration=".4s">
              I am a technology enthusiast with highly skiled in web developer. Find my work Linkedin.
            </p>
            <div className="per-signature margin-top-sm wow fadeInUp" data-wow-duration=".4s">
              <img className="img-responsive" src="img/signature.png" alt="signature" />
            </div>
          </section>
    );
  }
}
export default About;