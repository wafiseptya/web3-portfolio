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
              <div>
                <form data-ng-submit="submit(contactform, $event)" name="contactform" method="post" className="row form-horizontal" role="form">
                  <div className="form-group input--hoshi col-sm-6" data-ng-class="{ 'has-error': contactform.inputName.$invalid && submitted }">
                    <div className="input-wrap">
                      <input autoComplete="off" data-ng-model="formData.inputName" type="text" className="form-control input__field input input__field--hoshi" id="inputName" name="inputName" placeholder="Name" required />
                      <label className="input__label input__label input__label--hoshi input__label--hoshi-color-1 input__label--hoshi input__label--hoshi-color-1" />
                    </div>	
                  </div>
                  <div className="form-group  input--hoshi col-sm-6" data-ng-class="{ 'has-error': contactform.inputEmail.$invalid && submitted }">
                    <div className="input-wrap">
                      <input autoComplete="off" data-ng-model="formData.inputEmail" type="email" className="form-control input input__field input__field--hoshi" placeholder="Email" id="inputEmail" name="inputEmail" required />
                      <label className="input__label input__label--hoshi input__label--hoshi-color-1" />
                    </div>	
                  </div>
                  <div className="form-group  input--hoshi col-sm-12" data-ng-class="{ 'has-error': contactform.inputMessage.$invalid && submitted }">
                    <div className="input-wrap">
                      <textarea data-ng-model="formData.inputMessage" className="form-control input input__field input__field--hoshi" rows={4} id="inputMessage" name="inputMessage" placeholder="message" required defaultValue={""} />
                      <label className="input__label input__label--hoshi input__label--hoshi-color-1" />
                    </div>	
                  </div>
                  <div className="form-group col-sm-12">
                    <div className="align-center">
                      <button type="submit" className="btn btn-default" data-ng-disabled="submitButtonDisabled">
                        <span className="mask" />
                        <span>send message</span>
                      </button>
                    </div>
                  </div>
                </form>
                <p data-ng-class="result">{'{'}{'{'} resultMessage {'}'}{'}'}</p>
              </div>
            </div>
            <div className="email-direct">
              <p className="wow fadeInRight" data-wow-duration=".4s">Or simply email me at <a href="mailto:hiya@penelope.com">hiya@penelope.com</a></p>
            </div>
          </section>
    );
  }
}
export default Contacts;