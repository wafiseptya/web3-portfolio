import React, { Component } from 'react';


class Contacts extends Component {
    constructor(props){
        super(props);

    }

  render(){
    return(
        <section id="contact_sec" className="col-lg-10 col-md-11 col-sm-11 center-div contact-wrap  sec-pad">
            <h6>contact</h6>
            <div data-ng-controller="ContactController" className="align-center wow fadeInUp" data-wow-duration=".4s">
              <h3>Hello <span data-ng-bind="formData.inputName||'friend'" />, I'd love to hear from you.</h3>
            </div>
            <div className="email-direct">
              <p className="wow fadeInRight" data-wow-duration=".4s">Email me at <a href="mailto:septya.wafi@gmail.com">septya.wafi@gmail.com</a></p>
            </div>
          </section>
    );
  }
}
export default Contacts;