import React, { Component } from 'react';


class Clients extends Component {
    constructor(props){
        super(props);
       
    }

  render(){
    return(
        <section id="client_sec" className="col-lg-10 col-md-11 col-sm-11 center-div client-wrap  sec-pad wow bounceIn" data-wow-duration=".4s">
            <h6>clients</h6>
            <div className="client-carousel">
              <img src="img/client1.png" alt="client" />
              <img src="img/client2.png" alt="client" />
              <img src="img/client3.png" alt="client" />
              <img src="img/client4.png" alt="client" />
              <img src="img/client5.png" alt="client" />
              <img src="img/client2.png" alt="client" />
            </div>
          </section>
    );
  }
}
export default Clients;