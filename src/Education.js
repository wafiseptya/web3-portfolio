import React, { Component } from 'react';


class Education extends Component {
    constructor(props){
        super(props);
        
    }

  render(){
    return(
        <section id="edu_sec" className="col-lg-10 col-md-11 col-sm-11 center-div education-wrap  sec-pad">
        <h6>education</h6>
        <p className="wow fadeInUp" data-wow-duration=".4s">
          I spent 3 years learning Art and Graphic Design, got my Bachelor degree in Communication and Applied Art and started working independently. I think one should never stop learning and go through a process of acquiring knowledge.
        </p>
        <div className="qualfication-wrap">
          <div className="qualfication first-row wow fadeInUp" data-wow-duration=".4s">
            <div className="col-sm-2">
              <span className="row-count"><span>1</span></span>
            </div>
            <div className="col-sm-2">
              <span className="yr-pers vertical-align-pad">2014-2016</span>
            </div>
            <div className="col-sm-5">
              <span className="insti vertical-align-pad">Shorepath Collegiate Institute of Performance Design, New York</span>
            </div>
            <div className="col-sm-3">
              <span className="design vertical-align-pad">
                Master of Art
              </span>
            </div>
          </div>
          <div className="qualfication wow fadeInUp" data-wow-duration=".4s">
            <div className="col-sm-2">
              <span className="row-count"><span>2</span></span>
            </div>
            <div className="col-sm-2">
              <span className="yr-pers vertical-align-pad">2012-2014</span>
            </div>
            <div className="col-sm-5">
              <span className="insti vertical-align-pad">Cedarglen University of Design, New York</span>
            </div>
            <div className="col-sm-3">
              <span className="design vertical-align-pad">
                Bachelor of Art
              </span>
            </div>
          </div>
          <div className="qualfication wow fadeInUp" data-wow-duration=".4s">
            <div className="col-sm-2">
              <span className="row-count"><span>3</span></span>
            </div>
            <div className="col-sm-2">
              <span className="yr-pers vertical-align-pad">2009-2012</span>
            </div>
            <div className="col-sm-5">
              <span className="insti vertical-align-pad">Crowmont  Design School, California</span>
            </div>
            <div className="col-sm-3">
              <span className="design vertical-align-pad">
                Graphic Design Diploma
              </span>
            </div>
          </div>
        </div>
      </section>	
    );
  }
}
export default Education;