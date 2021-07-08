import React, { Component } from "react";
// import ReactDOM from 'reactdom';
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import img1 from "./images/8.png";
import App from "./App.js";
import "./Course.css";
import "./App.css";
import Java from "./Java";
import JS from "./React";
import SQL from "./SQL";
import Python from "./Python";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";
// import Navlinks from './navlinks';

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Learn() {
    ReactDOM.render(<Python />, document.getElementById("root"));
  }

  Learn1() {
    ReactDOM.render(<Java />, document.getElementById("root"));
  }

  Learn2() {
    ReactDOM.render(<JS />, document.getElementById("root"));
  }

  Learn3() {
    ReactDOM.render(<SQL />, document.getElementById("root"));
  }

  About = () => {
    ReactDOM.render(<App />, document.getElementById("root"));
  };

  Courses = () => {
    ReactDOM.render(<Courses />, document.getElementById("root"));
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
        <Container fluid>
          <br></br>
          <br></br>

          <br></br>

          <Row>
            <Col lg={6}>
              <h4
                style={{
                  fontFamily: "Sans-serif",
                  font: "large",
                  fontWeight: "bold",
                }}
              >
                {" "}
                PYTHON
              </h4>
              <p style={{ fontFamily: "Sans-serif", fontSize: "larger" }}>
                Python is a general-purpose programming language, so it can be
                used for many things and it is easy to learn. Python is used for
                web development, AI, machine learning, operating systems, mobile
                application development, and video games.
              </p>
              {/* <button onClick={()=>{this.Learn()}}>Learn more </button> */}
              <Button
                class="button"
                align="right"
                onClick={() => {
                  this.Learn();
                }}
              >
                Learn More
              </Button>
              <br></br>
              <br></br>
            </Col>

            <Col lg={6}>
              <h4
                style={{
                  fontFamily: "Sans-serif",
                  font: "large",
                  fontWeight: "bold",
                }}
              >
                {" "}
                JAVA
              </h4>
              <p style={{ fontFamily: "Sans-serif", fontSize: "larger" }}>
                Java is an object-oriented programming language that produces
                software for multiple platforms. When a programmer writes a Java
                application, the compiled code (known as bytecode) runs on most
                operating systems (OS), including Windows, Linux and Mac OS.
                Java derives much of its syntax from the C and C++ programming
                languages.
              </p>
              {/* <button onClick={()=>{this.Learn()}}>Learn more </button> */}
              <Button
                class="button"
                onClick={() => {
                  this.Learn1();
                }}
              >
                Learn More
              </Button>
            </Col>
          </Row>

          <br></br>
          <Row>
            <Col lg={6}>
              <h4
                style={{
                  fontFamily: "Sans-serif",
                  font: "large",
                  fontWeight: "bold",
                }}
              >
                {" "}
                REACTJS
              </h4>
              <p style={{ fontFamily: "Sans-serif", fontSize: "larger" }}>
                React. js is an open-source JavaScript library that is used for
                building user interfaces specifically for single-page
                applications. It's used for handling the view layer for web and
                mobile apps. React also allows us to create reusable UI
                components.
              </p>
              {/* <button onClick={()=>{this.Learn()}}>Learn more </button> */}
              <Button
                class="button"
                onClick={() => {
                  this.Learn2();
                }}
              >
                Learn More
              </Button>
              <br></br>
              <br></br>
            </Col>

            <Col lg={6}>
              <h4
                style={{
                  fontFamily: "Sans-serif",
                  font: "large",
                  fontWeight: "bold",
                }}
              >
                {" "}
                SQL
              </h4>
              <p style={{ fontFamily: "Sans-serif", fontSize: "larger" }}>
                SQL is used to communicate with a database. According to ANSI
                (American National Standards Institute), it is the standard
                language for relational database management systems. SQL
                statements are used to perform tasks such as update data on a
                database, or retrieve data from a database.
              </p>
              {/* <button onClick={()=>{this.Learn()}}>Learn more </button> */}
              <Button
                class="button"
                onClick={() => {
                  this.Learn3();
                }}
              >
                Learn More
              </Button>
            </Col>
          </Row>
          <br></br>

          <br></br>

          <br></br>
        </Container>
      </div>
    );
  }
}

export default Courses;
