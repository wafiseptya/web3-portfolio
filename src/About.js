import React, { Component } from 'react';


class About extends Component {
    constructor(props){
        super(props);
      
    }

  render(){
    return(
        <section id="intro_content_sec" className="col-lg-10 col-md-11 col-sm-11 center-div intro-content-wrap sec-pad">
            <div className="person-img margin-bottom-xs" />
            <h1>
              Hello!<span id="typed" />
            </h1>
            <h6>
              about
            </h6>
            <p className="pad-bottom-35 wow fadeInUp" data-wow-duration=".6s">
              Lahir pada 16 Mei 1999 dan besar di Sidikalang, Sumatera Utara.Pernah berkuliah di Universitas Gadjah Mada jurusan D3 Komputer dan Sistem Informasi di Universitas Gadjah Mada. Saat ini sedang mengikuti perkuliahan semester 4 dan memngambil 85/110 sks.
            </p>
            <p className="wow fadeInUp" data-wow-duration=".4s">
              test
            </p>
            <div className="per-signature margin-top-sm wow fadeInUp" data-wow-duration=".4s">
              <img className="img-responsive" src="img/signature.png" alt="signature" />
            </div>
          </section>
    );
  }
}
export default About;