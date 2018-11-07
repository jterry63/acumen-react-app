import React, { Component } from "react";
import "./Nav.css";


class Nav extends Component {
  state = {
    backgroundColor: "transparent",
    imgSrc: "../images/acumen-white.png",
    color: "",
    border: "1px solid white"
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  handleScroll = e => {
    if (window.scrollY > 10) {
      this.setState({ backgroundColor: "rgba(71,71,71,.9)", imgSrc: "../images/acumen3.png" });
    } else {
      this.setState({
        backgroundColor: "transparent",
        imgSrc: "../images/acumen-white.png",
        color: "white",
        border: "1px solid white"
      });
    }
  };

  render() {
    return (
   <div>

        <nav
          className="nav-master z-depth-0"
          style={{ backgroundColor: this.state.backgroundColor }}
        >
          <div className="navbar-fixed">
            <a className="navbar-brand" href="#">
              <img src={this.state.imgSrc} />
            </a>
            <div id="nav-buttons">
              <a
                href=""
                className="btn-flat"
                id="nav1"
                style={{ color: this.state.color }}
              >
                Platform
              </a>
              <a
                href=""
                className="btn-flat"
                id="nav2"
                style={{ color: this.state.color }}
              >
                Product
              </a>
              <a
                href=""
                className="btn-flat"
                id="nav3"
                style={{ color: this.state.color }}
              >
                Company
              </a>
              <a
                href=""
                className="btn-flat"
                id="nav4"
                style={{ color: this.state.color }}
              >
                Contact
              </a>

              <div id="login-buttons">
                <a
                  href=""
                  className="btn-flat"
                  id="loginBtn"
                  style={{ color: this.state.color }}
                >
                  Log In
                </a>
                <a
                  href=""
                  className="btn-flat"
                  id="signUpBtn"
                  style={{ color: this.state.color, border: this.state.border }}
                  
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </nav>





      </div>
    );
  }
}

export default Nav;

