import React, { Component } from "react";
import './Home.css';
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Body from "../../components/Body/Body";


import { Parallax, Background } from 'react-parallax';



const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

class Home extends Component {
  render() {
    
    return (
      <div>
   

    <div className="img-nav-container">
    
    <img id="hero-img" src="../images/hero.png" />

    <div className="card-panel z-depth-0 center-align" id="slogan">
      <span className="white-text" id="slogan-text">
        When employees are happy, your organization succeeds
      </span>
      <br />
      <br />
      <a href="" className="btn-flat center-align" id="getStarted">
        Get Started
      </a>
    </div>
    </div>

    <Nav />
    <Body />

      <Parallax
            blur={0}
            bgImage={"../images/analytics.jpg"}
            bgImageAlt="the cat"
            strength={200}
        >
          <div style={insideStyles}>
          HTML inside the parallax
          
          
          </div>
            <div style={{ height: '500px' }} />
        </Parallax>

  <Body />
  
<Footer />

    
    </div>
    
    
  );
  }
}

export default Home;