import React, { Component } from 'react';


class Education extends Component {
  
  render(){
    return(
        <section id="edu_sec" className="col-lg-10 col-md-11 col-sm-11 center-div education-wrap  sec-pad">
        <h6>education</h6>
        <div className="qualfication-wrap">
          <div className="qualfication first-row wow fadeInUp" data-wow-duration=".4s">
            <div className="col-sm-2">
              <span className="row-count"><span>1</span></span>
            </div>
            <div className="col-sm-2">
              <span className="yr-pers vertical-align-pad">2017-present</span>
            </div>
            <div className="col-sm-5">
              <span className="insti vertical-align-pad">Universitas Gadjah Mada</span>
            </div>
            <div className="col-sm-3">
              <span className="design vertical-align-pad">
              Diploma of Computer Information System
              </span>
            </div>
          </div>
          <div className="qualfication wow fadeInUp" data-wow-duration=".4s">
            <div className="col-sm-2">
              <span className="row-count"><span>2</span></span>
            </div>
            <div className="col-sm-2">
              <span className="yr-pers vertical-align-pad">2015-2017</span>
            </div>
            <div className="col-sm-5">
              <span className="insti vertical-align-pad">SMK N 2 Lamongan</span>
            </div>
            <div className="col-sm-3">
              <span className="design vertical-align-pad">
                Computers and Networking Major
              </span>
            </div>
          </div>
        </div>
      </section>	
    );
  }
}
export default Education;