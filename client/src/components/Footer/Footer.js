import React, { Component } from "react";
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="subscription-section" style={{  backgroundImage: "url(" + "../images/subscribe.png" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',}}>
           
    
           <footer className="page-footer">
            <div className="container">
          
              <div className="row">
                
              <div className="col l2 s12">
          <h6>Company</h6>
          <hr />
          <ul>
            <li><a className="footer-link" href="#!">About Us</a></li>
            <li><a className="footer-link" href="#!">Our Mission</a></li>
          </ul>
        </div>
        <div className="col l2 s12">
          <h6>Products</h6>
          <hr />
          <ul>
            <li><a className="footer-link" href="#!">Engagement</a></li>
            <li><a className="footer-link" href="#!">Onboarding</a></li>
            <li><a className="footer-link" href="#!">IdeaBox</a></li>
          </ul>
        </div>
        <div className="col l2 s12">
          <h6>Platform</h6>
          <hr />
          <ul>
            <li><a className="footer-link" href="#!">Admin Dashboard</a></li>
            <li><a className="footer-link" href="#!">Analytics</a></li>
            <li><a className="footer-link" href="#!">See a Demo</a></li>
          </ul>
        </div>
        <div className="col l2 s12">
          <h6>Community</h6>
          <hr />
          <ul>
            <li><a target="_blank " href="https://linkedin.com ">
                  <i className="fa fa-2x fa-linkedin-square left " />
                </a></li>
            <li> <a target="_blank " href="https://twitter.com ">
                  <i className="fa fa-2x fa-twitter-square left " />
                </a></li>
            <li><a target="_blank " href="https://instagram.com ">
                  <i className="fa fa-2x fa-instagram left " />
                </a></li>
                <li>  <a target="_blank " href="https://facebook.com ">
                  <i className="fa fa-2x fa-facebook-square left " />
                </a></li>

          </ul>
        </div>

          <div className="col l4 s12 right-align">
          <br />
          <br />
         
        
          <a href="" className="btn-flat" id="helpBtn"
                 
                  
                >
                  Need Help? Get Support <i id="arrow-icon" className="small material-icons">arrow_forward</i>
                </a>
              </div>
               
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
              <div className="left-align">
                © 2018 Acumen Inc.
                </div>
              </div>
            </div>
          </footer>
                
                  </div>


        );
      }
    }


export default Footer;