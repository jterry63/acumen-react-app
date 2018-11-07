
import React, { Component } from "react";
import "./Body.css";




class Body extends Component {
    render() {
        return (

    
<div>
        <div className="card-container center-block">
        <h4 className="center">The exmployee experience platform <br />that helps you understand your people <br /> and your organization</h4>
        <div className="section" id="about">
          <div className="row">
            <div className="col s12 m4">
            <div className="cards">
            <div className="card-content">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons" style={{color: 'darkcyan', fontSize: 40}}>group</i></h2>
                <h5 className=" center ">Simple User Experience</h5>
                <p className="light ">We did most of the heavy lifting for you to provide a default stylings that incorporate our
                  custom components. Additionally, we refined animations and transitions to provide a smoother experience for
                  developers.
                </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col s12 m4 ">
            <div className="cards">
            <div className="card-content">
              <div className="icon-block ">
                <h2 className="center light-blue-text "><i className="material-icons " style={{color: 'darkcyan', fontSize: 40}}>data_usage</i></h2>
                <h5 className="center ">Data Driven Insights</h5>
                <p className="light ">By utilizing elements and principles of Material Design, we were able to create a framework
                  that incorporates components and animations that provide more feedback to users. Additionally, a single underlying
                  responsive system across all platforms allow for a more unified user experience.</p>
                  </div>
                  </div>
              </div>
            </div>
            <div className="col s12 m4 ">
            <div className="cards">
            <div className="card-content">
              <div className="icon-block ">
                <h2 className="center light-blue-text "><i className="material-icons " style={{color: 'darkcyan', fontSize: 40}}>feedback</i></h2>
                <h5 className=" center ">Informed Decision Making</h5>
                <p className="light ">We have provided detailed documentation as well as specific code examples to help new users
                  get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br />


      </div>





      </div>
      );
    }
  }


export default Body;