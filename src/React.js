import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import img1 from "./images/8.png";
import Button from "@material-ui/core/Button";

import "./App.css";
import "./Python.css";
import ReactPlayer from "react-player";
import { Container, Row, Col } from "react-bootstrap";
import Courses from "./Courses.js";
import App from "./App.js";

class JS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ashish: false,
      ashish1: false,
      ashish2: false,
      ashish3: false,
    };
  }

  About = () => {
    ReactDOM.render(<App />, document.getElementById("root"));
  };

  Courses = () => {
    ReactDOM.render(<Courses />, document.getElementById("root"));
  };

  DataTypes = () => {
    this.setState({ ashish: !this.state.ashish });
  };
  DataTypes1 = () => {
    this.setState({ ashish1: !this.state.ashish1 });
  };
  DataTypes2 = () => {
    this.setState({ ashish2: !this.state.ashish2 });
  };

  DataTypes3 = () => {
    this.setState({ ashish3: !this.state.ashish3 });
  };

  render() {
    return (
      <div>
        <Navbar
          style={{ backgroundColor: "#1c273b" }}
          sticky="top"
          expand="lg"
          collapseOnSelect
        >
          <Navbar.Brand>
            <img src={img1} width="40px" height="40px" />{" "}
          </Navbar.Brand>

          <Navbar.Toggle style={{ backgroundColor: "white" }} />
          <Navbar.Collapse>
            <Nav>
              <Button
                onClick={this.About}
                style={{
                  color: "whitesmoke",
                  fontFamily: "serif",
                  font: "large",
                }}
              >
                About{" "}
              </Button>
              <Button
                onClick={this.Courses}
                style={{
                  color: "whitesmoke",
                  fontFamily: "serif",
                  font: "large",
                }}
              >
                Courses{" "}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br></br>
        <br></br>
        <Container>
          <div>
            <h2 class="Centertext">About ReactJS</h2>
            <p class="Centertext">
              React is a JavaScript library created for building fast and
              interactive user interfaces for web and mobile applications. It is
              an open-source, component-based, front-end library responsible
              only for the application’s view layer. In Model View Controller
              (MVC) architecture, the view layer is responsible for how the app
              looks and feels. React was created by Jordan Walke, a software
              engineer at Facebook.
              <br></br>
              <br></br>
              React makes it easier to create dynamic web applications because
              it requires less coding and offers more functionality, as opposed
              to JavaScript, where coding often gets complex very quickly. React
              uses Virtual DOM, thereby creating web applications faster.
              Virtual DOM compares the components’ previous states and updates
              only the items in the Real DOM that were changed, instead of
              updating all of the components again, as conventional web
              applications do.
              <br></br>
              <br></br>
              Components are the building blocks of any React application, and a
              single app usually consists of multiple components. These
              components have their logic and controls, and they can be reused
              throughout the application, which in turn dramatically reduces the
              application’s development time. React follows a unidirectional
              data flow. This means that when designing a React app, developers
              often nest child components within parent components. Since the
              data flows in a single direction, it becomes easier to debug
              errors and know where a problem occurs in an application at the
              moment in question.
            </p>
          </div>

          <div>
            <Button onClick={this.DataTypes}>
              <h6>
                <u>JSx Overview</u>
              </h6>
            </Button>
            {this.state.ashish === true ? (
              <div>
                <ReactPlayer
                  url="https://youtu.be/Ia0FSogTRaw"
                  controls={true}
                  loop={true}
                />
              </div>
            ) : null}
          </div>

          <div>
            <Button onClick={this.DataTypes1}>
              <h6>
                <u>React Components </u>
              </h6>
            </Button>
            {this.state.ashish1 === true ? (
              <div>
                <ReactPlayer
                  url="https://youtu.be/Cla1WwguArA"
                  controls={true}
                  loop={true}
                />
              </div>
            ) : null}
          </div>

          <div>
            <Button onClick={this.DataTypes2}>
              <h6>
                <u>Lifecycle Methods </u>
              </h6>
            </Button>
            {this.state.ashish2 === true ? (
              <div>
                <ReactPlayer
                  url="https://youtu.be/Oioo0IdoEls"
                  controls={true}
                  loop={true}
                />
              </div>
            ) : null}
          </div>

          <div>
            <Button onClick={this.DataTypes3}>
              <h6>
                <u>Advance react </u>
              </h6>
            </Button>
            {this.state.ashish3 === true ? (
              <div>
                <ReactPlayer
                  url="https://youtu.be/324czHa9O9U"
                  controls={true}
                  loop={true}
                />
              </div>
            ) : null}
          </div>
        </Container>
      </div>
    );
  }
}

export default JS;
