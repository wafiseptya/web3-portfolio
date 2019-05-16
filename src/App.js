import React from 'react';
import './App.css';
import About from './About.js';
import Services from './Services.js';
import Skills from './Skills';
import Work from './Work';
import Education from './Education';
import Experience from './Experience';
import Clients from './Clients';
import Achivements from './Achivements';
import Contact from './Contact';

function App() {
  return (
    <div className="container-fluid">
    <div className="row">
      <div id="vertical_nav_wrap" className="col-lg-4 col-xs-12 pad-zero vertical-nav-wrap">
        {/*Navigation*/}
        <nav className="navbar navbar-default vertical-nav" role="navigation">
          <div className="navbar-header">
            <button type="button" className="btn btn-default navbar-toggle" data-toggle="collapse" data-target="#navbar_collapse">
              <span className="mask" />
              <span className="btn-label">
                <span className="pe-7s-menu" />
              </span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbar_collapse">
            <ul className="nav navbar-nav">
              <li><a data-scroll href="#body" /><span>about</span></li>
              <li><a data-scroll href="#services_sec" /><span>services</span></li>
              <li><a data-scroll href="#skill_sec" /><span>skills</span></li>
              <li><a data-scroll href="#work_sec" /><span>work</span></li>
              <li><a data-scroll href="#edu_sec" /><span>education</span></li>
              <li><a data-scroll href="#exp_sec" /><span>experience</span></li>
              <li><a data-scroll href="#client_sec" /><span>clients</span></li>
              <li><a data-scroll href="#achivement_sec" /><span>achivements</span></li>
              <li><a data-scroll href="#contact_sec" /><span>contact</span></li>
            </ul>
          </div>
        </nav>
        {/*/Navigation*/}
      </div>
      <div className="col-lg-8 col-xs-12 pad-zero">
        {/*Header*/}
        <header>
          <div className="header-wrap col-lg-10 center-div">
            <div className="float-left name">
              <a data-scroll href="#body">
                <span>
                  MAIDA KRISMA RAJAGUKGUK
                </span>
              </a>	
            </div>	
          </div>
          <div className="clearfix" />
        </header>
        {/*/Header*/}
        {/*Main Content*/}
        <div id="main_content" className="content-block margin-top-150 margin-top-sm-70 margin-top-xs-50">
          {/*Introduction Sec*/}
          <About/>
          {/*/Introduction Sec*/}
          <hr className="separater-hr" />
          {/*WhatWeDo Sec*/}
          <Services/>
          {/*/WhatWeDo Sec*/}
          <hr className="separater-hr" />
          {/*Skills Sec*/}
          <Skills/>
          {/*/Skills Sec*/}
          <hr className="separater-hr" />
          {/*Work Sec*/}
          <Work/>
          {/*/Work Sec*/}
          <hr className="separater-hr" />
          {/*Qualfication Sec*/}
          <Education/>
          {/*/Qualfication Sec*/}
          <hr className="separater-hr" />
          {/*Experience Sec*/}
          <Experience/>
          {/*/Experience Sec*/}
          <hr className="separater-hr" />
          {/*Client Sec*/}
          <Clients/>
          {/*/Client Sec*/}
          <hr className="separater-hr" />
          {/*Achivement Sec*/}
          <Achivements/>
          {/*/Achivement Sec*/}
          <hr className="separater-hr" />
          {/*Contact Sec*/}
          <Contact/>
          {/*Contact Sec*/}
          <hr className="separater-hr" />
          {/*Footer*/}
          <footer className="col-lg-10 col-md-11 col-sm-11 center-div contact-wrap  sec-pad">
            <div className="row">
              <div className="col-sm-6 available-wrap">
                <span className="available-pointer" />
                <span className="available-tag">Available for Freelance Projects.</span>
              </div>
              <div className="col-sm-6">
                <div className="social-icons-wrap float-right">
                  {/*Social Icons*/}
                  <ul className="social-icons float-right">
                    <li>
                      <a href="#" className="social-icon">
                        <span className="fa" data-hover=""></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-icon">
                        <span className="fa" data-hover=""></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-icon">
                        <span className="fa" data-hover=""></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-icon">
                        <span className="fa" data-hover=""></span>
                      </a>
                    </li>
                  </ul>
                  {/*/Social Icons*/}
                </div>
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
          {/*/Footer*/}
        </div>	
        {/*/Main Content*/}
      </div>
    </div>	
  </div>
  );
}

export default App;
