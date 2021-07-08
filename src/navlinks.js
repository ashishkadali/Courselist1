import React,{Component} from 'react';
import {Nav, Navbar,NavDropdown} from 'react-bootstrap';
import img1 from './images/8.png';
import{BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from'./App.js';
import Courses from './Courses.js';

class Navlinks extends Component{
    render(){
        return(
          <div>
            <Router>
          <div>
            <App
              activeOnlyWhenExact={true}
              to="/"
              label="Home"
            />
            <Courses to="/Courses" label="About" />
    
            <hr />
    
            <Switch>
              <Route exact path="/">
                <App />
              </Route>
              <Route path="/Courses">
                <Courses />
              </Route>
            </Switch>
          </div>
        </Router>
    
    
    
    
    
    
    
    
            <Navbar style={{backgroundColor:"#1c273b"}} sticky="top" expand="lg" collapseOnSelect>
              <Navbar.Brand>
                <img src={img1} width="40px" height="40px" />{' '}
              </Navbar.Brand>
    
              <Navbar.Toggle style={{backgroundColor:"white" }} />
                <Navbar.Collapse>
                  <Nav >
                    <Nav.Link exact to="/" style={{color:"whitesmoke",fontFamily:"serif",font:"large"}}>About </Nav.Link>
                    <Nav.Link to="/Courses" style={{color:"whitesmoke",fontFamily:"serif",font:"large"}}> Courses</Nav.Link>
                    
                  </Nav>
                </Navbar.Collapse>
          </Navbar>
    <br></br>
    <br></br>
    
    
          </div>
        ); 
      
      }
}
export default Navlinks;