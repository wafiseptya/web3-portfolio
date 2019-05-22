import React, { Component } from 'react';


class Achivements extends Component {

  render(){
    return(
        <section id="achivement_sec" className="col-lg-10 col-md-11 col-sm-11 center-div achivement-wrap  sec-pad-top sec-pad-bottom-sm">
            <h6>achivements</h6>
            <p className="wow fadeInUp" data-wow-duration=".4s">It always seems impossible until its done. Participated in more than 100 contests run online and run by government. I got first prize for Logo Design done for a Fashion Brand in 2015, the ceremony held in Germany.</p>
            <div className="achivement-list-wrap margin-top-40">
              <ul className="row">
                <li className="col-sm-6">
                  <ul>
                    <li className="margin-bottom-xs wow fadeInUp" data-wow-duration=".4s" data-wow-delay="0s">
                      <span className="dash-pointer">-</span>
                      <span className="achive-pts">First Price for Logo Design in Berman Design Award</span>
                    </li>
                    <li className="margin-bottom-xs wow fadeInUp" data-wow-duration=".4s" data-wow-delay=".2s"><span className="dash-pointer">-</span><span className="achive-pts">Honorable Mention at International Design Awards</span></li>
                    <li className="margin-bottom-xs wow fadeInUp" data-wow-duration=".4s" data-wow-delay=".4s"><span className="dash-pointer">-</span><span className="achive-pts">AICB New York, USA</span></li>
                    <li className="margin-bottom-xs wow fadeInUp" data-wow-duration=".4s" data-wow-delay=".6s"><span className="dash-pointer">-</span><span className="achive-pts">International CNDY Awards New York, USA</span></li>
                  </ul>
                </li>
                <li className="col-sm-6">
                  <ul>
                    <li className="margin-bottom-xs wow fadeInUp" data-wow-duration=".4s" data-wow-delay="0s"><span className="dash-pointer">-</span><span className="achive-pts">Drix Club des Directeurs Artistiques Paris, France</span></li>
                    <li className="margin-bottom-xs wow fadeInUp" data-wow-duration=".4s" data-wow-delay="0.2s"><span className="dash-pointer">-</span><span className="achive-pts">A&amp;AD Awards (Yellow &amp; Black Pencils) London, UK</span></li>
                    <li className="margin-bottom-xs wow fadeInUp" data-wow-duration=".4s" data-wow-delay=".4s"><span className="dash-pointer">-</span><span className="achive-pts">Global Dffie Awards New York, USA</span></li>
                    <li className="margin-bottom-xs wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".6s"><span className="dash-pointer">-</span><span className="achive-pts">The Intercontinental Advertising Award (The Cup) (ICAA) Spain</span></li>
                  </ul>
                </li>
              </ul>
            </div>	
          </section>
    );
  }
}
export default Achivements;