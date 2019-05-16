import React, { Component } from 'react';


class Services extends Component {
    constructor(props){
        super(props);
        
    }

  render(){
    return(
        <section id="services_sec" className="col-lg-10 col-md-11 col-sm-11 center-div services-icon-wrap  sec-pad-top sec-pad-bottom-xs">
            <h6>what i do</h6>
            <div className="row">
              <div className="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft" data-wow-duration=".4s" data-wow-delay="0s">
                <span className="icon pe-7s-network" />
                <span className="key-fact">
                  STUDENT
                </span>
              </div>
              <div className="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft" data-wow-duration=".4s" data-wow-delay=".1s">
                <span className="icon pe-7s-vector" />
                <span className="key-fact">
                  HAND LETTERING
                </span>
              </div>
              <div className="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft" data-wow-duration=".4s" data-wow-delay=".2s">
                <span className=" icon pe-7s-camera" />
                <span className="key-fact">
                  ORAGNIZATION
                </span>
              </div>
              <div className="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft" data-wow-duration=".4s" data-wow-delay=".3s">
                <span className="icon pe-7s-portfolio" />
                <span className="key-fact">
                  MANAGEMENT
                </span>
              </div>
            </div>	
          </section>
    );
  }
}
export default Services;