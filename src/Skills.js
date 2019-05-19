import React, { Component } from 'react';


class Skills extends Component {
    constructor(props){
        super(props);

    }

  render(){
    return(
        <section id="skill_sec" className="col-lg-10 col-md-11 col-sm-11 center-div skills-wrap  sec-pad-top sec-pad-bottom-xs">
        <h6>technical skills</h6>
        <p className="wow fadeInUp" data-wow-duration=".4s">Sebagai seorang mahasiswa diploma jurusan Ilmu Komputer dan Sistem Informasi saya dituntut untuk menguasai salah satu dari teknologi yang ada seperti Web Development maupun Mobile Development. Pada jurusan ini saya dituntut untuk dapat berpikir kritis, empati dan kreativitas untuk menciptakan solusi yang layak dan berdampak menggunakan teknologi ini.
        </p>
        <div className="row margin-top-40">
          <div className="col-sm-5 margin-bottom-sm">
            <span className="progress-cat">C++</span>
            <div className="progress-bar-graph"> 
              <div className="progress-bar-wrap">
                <div className="bar-wrap">
                  <span data-width={97}>
                    <strong><i>97</i>%</strong>
                  </span>
                </div>
              </div>	
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-5 margin-bottom-sm">
            <span className="progress-cat">Laravel</span>
            <div className="progress-bar-graph"> 
              <div className="progress-bar-wrap">
                <div className="bar-wrap">
                  <span data-width={97}>
                    <strong><i>97</i>%</strong>
                  </span>
                </div>
              </div>	
            </div>
          </div>
          <div className="clearfix" />
          <div className="col-sm-5 margin-bottom-sm">
            <span className="progress-cat">PHP</span>
            <div className="progress-bar-graph"> 
              <div className="progress-bar-wrap">
                <div className="bar-wrap">
                  <span data-width={100}>
                    <strong><i>100</i>%</strong>
                  </span>	
                </div>
              </div>	
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-5 margin-bottom-sm">
            <span className="progress-cat">CSS</span>
            <div className="progress-bar-graph"> 
              <div className="progress-bar-wrap">
                <div className="bar-wrap">
                  <span data-width={100}>
                    <strong><i>100</i>%</strong>
                  </span>
                </div>
              </div>	
            </div>
          </div>
          <div className="clearfix" />
          <div className="col-sm-5 margin-bottom-sm">
            <span className="progress-cat">HTML</span>
            <div className="progress-bar-graph"> 
              <div className="progress-bar-wrap">
                <div className="bar-wrap">
                  <span data-width={86}>
                    <strong><i>86</i>%</strong>
                  </span>
                </div>
              </div>	
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-5 margin-bottom-sm">
            <span className="progress-cat">Corel Draw</span>
            <div className="progress-bar-graph"> 
              <div className="progress-bar-wrap">
                <div className="bar-wrap">
                  <div className="bar-wrap">
                    <span data-width={86}>
                      <strong><i>86</i>%</strong>
                    </span>
                  </div>	
                </div>
              </div>	
            </div>
          </div>
          <div className="clearfix" />
        </div>	
      </section>
    );
  }
}
export default Skills;