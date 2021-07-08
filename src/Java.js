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

class Java extends Component {
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
            <h2 class="Centertext">About Java</h2>
            <p class="Centertext">
              Java is a general-purpose, class-based, object-oriented
              programming language designed for having lesser implementation
              dependencies. It is a computing platform for application
              development. Java is fast, secure, and reliable, therefore. It is
              widely used for developing Java applications in laptops, data
              centers, game consoles, scientific supercomputers, cell phones,
              etc.
              <br></br>
              <br></br>
              Java Platform is a collection of programs that help programmers to
              develop and run Java programming applications efficiently. It
              includes an execution engine, a compiler, and a set of libraries
              in it. It is a set of computer software and specifications. James
              Gosling developed the Java platform at Sun Microsystems, and the
              Oracle Corporation later acquired it.
              <br></br>
              <br></br>A Java Programmer writes a program in a human-readable
              language called Source Code. Therefore, the CPU or Chips never
              understand the source code written in any programming language.
              These computers or chips understand only one thing, which is
              called machine language or code. These machine codes run at the
              CPU level. Therefore, it would be different machine codes for
              other models of CPU. However, you need to worry about the machine
              code, as programming is all about the source code. The machine
              understands this source code and translates them into machine
              understandable code, which is an executable code.
            </p>
          </div>

          <div>
            <Button onClick={this.DataTypes}>
              <h6>
                <u>Data Types</u>
              </h6>
            </Button>
            {this.state.ashish === true ? (
              <div>
                <ReactPlayer
                  url="https://youtu.be/0MFC_Vw9NxY"
                  controls={true}
                  loop={true}
                />
              </div>
            ) : null}
          </div>

          <div>
            <Button onClick={this.DataTypes1}>
              <h6>
                <u>Operators </u>
              </h6>
            </Button>
            {this.state.ashish1 === true ? (
              <div>
                <ReactPlayer
                  url="https://youtu.be/8CX4Tdttbqk"
                  controls={true}
                  loop={true}
                />
              </div>
            ) : null}
          </div>

          <div>
            <Button onClick={this.DataTypes2}>
              <h6>
                <u>Functions </u>
              </h6>
            </Button>
            {this.state.ashish2 === true ? (
              <div>
                <ReactPlayer
                  url="https://youtu.be/1cWAcMdEXiQ"
                  controls={true}
                  loop={true}
                />
              </div>
            ) : null}
          </div>

          <div>
            <Button onClick={this.DataTypes3}>
              <h6>
                <u>OPP's Concepts </u>
              </h6>
            </Button>
            {this.state.ashish3 === true ? (
              <div>
                <ReactPlayer
                  url="https://youtu.be/EKxJclTX8iM"
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

export default Java;
