import React, { Component } from 'react';


class Skills extends Component {

  render(){
    return(
        <section id="skill_sec" className="col-lg-10 col-md-11 col-sm-11 center-div skills-wrap  sec-pad-top sec-pad-bottom-xs">
        <h6>technical skills</h6>
        <p className="wow fadeInUp" data-wow-duration=".4s" align="justify">As a diploma student in Computer Science and infomation System, I was required to know about one of the existing technologies such as Web Development and Mobile Development. In this department, I am required to be able to think critically, empathy and creativity to create  impactful solutions using this technology.
        </p>
        <div className="row margin-top-40">
          <div className="col-sm-5 margin-bottom-sm">
            <span className="progress-cat">C++</span>
            <div className="progress-bar-graph"> 
              <div className="progress-bar-wrap">
                <div className="bar-wrap">
                  <span style={{width: '90%'}}>
                    <strong style={{opacity: 100}}><i>90</i>%</strong>
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
                  <span style={{width: '95%'}}>
                    <strong style={{opacity: 100}}><i>90</i>%</strong>
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
                  <span style={{width: '90%'}}>
                    <strong style={{opacity: 100}}><i>90</i>%</strong>
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
                  <span style={{width: '90%'}}>
                    <strong style={{opacity: 100}}><i>90</i>%</strong>
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
                  <span style={{width: '95%'}}>
                    <strong style={{opacity: 100}}><i>90</i>%</strong>
                  </span>
                </div>
              </div>	
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-5 margin-bottom-sm">
            <span className="progress-cat">Javascript</span>
            <div className="progress-bar-graph"> 
              <div className="progress-bar-wrap">
                <div className="bar-wrap">
                  <div className="bar-wrap">
                    <span style={{width: '80%'}}>
                      <strong style={{opacity: 100}}><i>90</i>%</strong>
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