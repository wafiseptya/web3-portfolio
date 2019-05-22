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
                {/* <span className="icon pe-7s-display1" /> */}
                <span className="key-fact">
                    WEB DEVELOPING
                </span>
              </div>
              <div className="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft" data-wow-duration=".4s" data-wow-delay=".1s">
                {/* <span className="icon pe-7s-vector" /> */}
                <span className="key-fact">
                  PROGRAMMING
                </span>
              </div>
              <div className="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft" data-wow-duration=".4s" data-wow-delay=".2s">
                {/* <span className=" icon pe-7s-graph2" /> */}
                <span className="key-fact">
                  DESIGNING
                </span>
              </div>
              <div className="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft" data-wow-duration=".4s" data-wow-delay=".3s">
                {/* <span className="icon pe-7s-graph1" /> */}
                <span className="key-fact">
                  ANALYST
                </span>
              </div>
            </div>	
          </section>
    );
  }
}
export default Services;