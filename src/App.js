import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import img1 from "./images/8.png";
import "./App.css";
import Button from "@material-ui/core/Button";

import ReactPlayer from "react-player";
import { Container, Row, Col } from "react-bootstrap";
import Courses from "./Courses.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        {/* <Router>
      <div> */}
        {/* <OldSchoolMenuLink
          activeOnlyWhenExact={true}
          to="/"
          label="Home"
        /> */}
        {/* <Courses to="/Courses" label="About" /> */}

        <hr />

        {/* <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/Courses">
            <Courses />
          </Route>
        </Switch>
      </div>
    </Router> */}

        <Navbar
          style={{ backgroundColor: "#1c273b" }}
          fixed="top"
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
        <br></br>

        <Container fluid style={{ backgroundColor: "salmon" }}>
          <br></br>
          <br></br>

          <br></br>

          <Row>
            <Col lg={6}>
              <h3
                style={{
                  fontFamily: "Sans-serif",
                  font: "large",
                  fontWeight: "bold",
                }}
              >
                What is a <u> Liberal Education</u> ?
              </h3>
            </Col>
            <Col
              lg={6}
              style={{
                fontFamily: "Sans-serif",
                fontSize: "larger",
                textAlign: "justify",
              }}
            >
              Liberal Education has been described as a philosophy of education
              that empowers individuals with broad knowledge, transferable
              skills, strong sense of values, ethics, and civic engagement -
              characterised by challenging encounters with important issues. It
              is more a way of studying than a specific course or field of
              study.
            </Col>
          </Row>
          <br></br>

          <br></br>

          <br></br>
        </Container>

        <br></br>
        <br></br>
        <div>
          <Container fluid>
            <Row>
              <Col lg={6}>
                <h3
                  style={{
                    fontFamily: "Sans-serif",
                    font: "large",
                    fontWeight: "bold",
                  }}
                >
                  What do we mean by a liberal education pathway?
                </h3>

                <p
                  style={{
                    fontFamily: "Sans-serif",
                    fontSize: "larger",
                    textAlign: "justify",
                  }}
                >
                  A liberal education is distinguished by how students learn,
                  and by the learning outcomes they achieve. Students must enjoy
                  their learning lives, but additionally they must also
                  understand how the gains they make are related to the
                  curricula, programs, and the educational experience as a
                  whole. Students must also be able to describe their
                  accomplishments and growth in ways that go beyond the
                  transcript and the résumé, and speak to values and principles.
                  Their work is expected to stand as evidence of their
                  intellectual and personal development and potential.
                </p>
              </Col>
              <Col align="center" lg={6}>
                {" "}
                <ReactPlayer
                  height="300px"
                  width="450px"
                  url="https://youtu.be/mWQJWCY8vo4"
                  controls
                />
              </Col>
            </Row>
          </Container>
        </div>
        {/* <ReactPlayer url="https://youtu.be/g57Ch-PFpvM" controls={true} loop={true} /> */}
      </div>
    );
  }
}

export default App;
