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

class SQL extends Component {
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
            <h2 class="Centertext">About SQL</h2>
            <p class="Centertext">
              SQL is Structured Query Language, which is a computer language for
              storing, manipulating and retrieving data stored in a relational
              database. SQL is the standard language for Relational Database
              System. All the Relational Database Management Systems (RDMS) like
              MySQL, MS Access, Oracle, Sybase, Informix, Postgres and SQL
              Server use SQL as their standard database language.
              <br></br>
              <br></br>
              MySQL is an open source SQL database, which is developed by a
              Swedish company – MySQL AB. MySQL is pronounced as "my
              ess-que-ell," in contrast with SQL, pronounced "sequel." MySQL is
              supporting many different platforms including Microsoft Windows,
              the major Linux distributions, UNIX, and Mac OS X. MySQL has free
              and paid versions, depending on its usage
              (non-commercial/commercial) and features. MySQL comes with a very
              fast, multi-threaded, multi-user and robust SQL database server.
              <br></br>
              <br></br>
              SQL is followed by a unique set of rules and guidelines called
              Syntax. This tutorial gives you a quick start with SQL by listing
              all the basic SQL Syntax. All the SQL statements start with any of
              the keywords like SELECT, INSERT, UPDATE, DELETE, ALTER, DROP,
              CREATE, USE, SHOW and all the statements end with a semicolon (;).
            </p>
          </div>

          <div>
            <Button onClick={this.DataTypes}>
              <h6>
                <u>SQL Syntax</u>
              </h6>
            </Button>
            {this.state.ashish === true ? (
              <div>
                <ReactPlayer
                  url="https://youtu.be/cWMCHbxMiMI"
                  controls={true}
                  loop={true}
                />
              </div>
            ) : null}
          </div>

          <div>
            <Button onClick={this.DataTypes1}>
              <h6>
                <u>Data Types </u>
              </h6>
            </Button>
            {this.state.ashish1 === true ? (
              <div>
                <ReactPlayer
                  url="https://youtu.be/fAkdR7VW8wQ"
                  controls={true}
                  loop={true}
                />
              </div>
            ) : null}
          </div>

          <div>
            <Button onClick={this.DataTypes2}>
              <h6>
                <u>Operators </u>
              </h6>
            </Button>
            {this.state.ashish2 === true ? (
              <div>
                <ReactPlayer
                  url="https://youtu.be/m1pCQCCGWoQ"
                  controls={true}
                  loop={true}
                />
              </div>
            ) : null}
          </div>

          <div>
            <Button onClick={this.DataTypes3}>
              <h6>
                <u>Advance SQL </u>
              </h6>
            </Button>
            {this.state.ashish3 === true ? (
              <div>
                <ReactPlayer
                  url="https://youtu.be/M-55BmjOuXY"
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

export default SQL;
