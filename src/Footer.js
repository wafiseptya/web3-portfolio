import React, { Component } from 'react';


class Services extends Component {
    

  render(){
    return(
        <footer className="col-lg-10 col-md-11 col-sm-11 center-div contact-wrap  sec-pad">
            <div className="row">
              <div className="col-sm-6 available-wrap">
                <span className="available-pointer" />
                <span className="available-tag">Available for Freelance Projects.</span>
              </div>
              <div className="col-sm-6">
                <div className="goto-top text-right float-right">
                  <a data-scroll href="#body">
                    <span data-hover="top">
                      top
                    </span>
                  </a>
                </div>
                <div className="copywrite-wrap text-right float-right">
                  <p className="copywrite">Fabricated by <b>Hencework © 2016.</b> Updated <b>June, 2016.</b></p>
                </div>
              </div>	
            </div>	
          </footer>
    );
  }
}
export default Services;