import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';

import {Nav, Navbar,NavDropdown} from 'react-bootstrap';
import img1 from './images/8.png';
import Button from "@material-ui/core/Button";

import './App.css';
import './Python.css';
import ReactPlayer from "react-player";
import {Container, Row, Col} from 'react-bootstrap';
import Courses from './Courses.js';
import App from './App.js';


class Python extends Component{
  constructor(props){
    super(props);
    this.state = {
        ashish:false,
        ashish1:false,
        ashish2:false,
        ashish3:false

    }
  }

  About= ()=>{
    ReactDOM.render(<App />, document.getElementById('root'))

  }

  Courses=()=>{
    ReactDOM.render(<Courses />, document.getElementById('root'))
  }

  DataTypes=()=>{
      this.setState({ashish: !this.state.ashish})
  }
  DataTypes1=()=>{
    this.setState({ashish1: !this.state.ashish1})
}
DataTypes2=()=>{
    this.setState({ashish2: !this.state.ashish2})
}

DataTypes3=()=>{
    this.setState({ashish3: !this.state.ashish3})
}


  render(){
    return(
      <div>
        <Navbar style={{backgroundColor:"#1c273b"}} sticky="top" expand="lg" collapseOnSelect>
          <Navbar.Brand>
            <img src={img1} width="40px" height="40px" />{' '}
          </Navbar.Brand>

          <Navbar.Toggle style={{backgroundColor:"white" }} />
            <Navbar.Collapse>
              <Nav >
              <Button onClick={this.About} style={{color:"whitesmoke",fontFamily:"serif",font:"large"}}>About </Button>
                <Button onClick={this.Courses} style={{color:"whitesmoke",fontFamily:"serif",font:"large"}}>Courses </Button>
              </Nav>
            </Navbar.Collapse>
      </Navbar>
        <br></br>
        <br></br>
    <Container>
        <div>
            <h2 class="Centertext" >About Python</h2>
            <p class="Centertext">Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.
                <br></br>
                <br></br>
                Often, programmers fall in love with Python because of the increased productivity it provides. Since there is no compilation step, the edit-test-debug cycle is incredibly fast. Debugging Python programs is easy: a bug or bad input will never cause a segmentation fault. Instead, when the interpreter discovers an error, it raises an exception. When the program doesn't catch the exception, the interpreter prints a stack trace. A source level debugger allows inspection of local and global variables, evaluation of arbitrary expressions, setting breakpoints, stepping through the code a line at a time, and so on. The debugger is written in Python itself, testifying to Python's introspective power. On the other hand, often the quickest way to debug a program is to add a few print statements to the source: the fast edit-test-debug cycle makes this simple approach very effective.</p>
        </div>


        <div>
            <Button onClick={this.DataTypes}><h6><u>Data Types</u></h6></Button>
            {this.state.ashish===true ? <div>
                    <ReactPlayer url="https://youtu.be/fg9j4Y1EBCc" controls={true} loop={true} />
             </div> : null}  
        </div>

        <div>
            <Button onClick={this.DataTypes1}><h6><u>Operators </u></h6></Button>
            {this.state.ashish1===true ? <div>
                    <ReactPlayer url="https://youtu.be/Pm9FOpOwhlA" controls={true} loop={true} />
             </div> : null}  
        </div>

        <div>
            <Button onClick={this.DataTypes2}><h6><u>Functions </u></h6></Button>
            {this.state.ashish2===true ? <div>
                    <ReactPlayer url="https://youtu.be/u-OmVr_fT4s" controls={true} loop={true} />
             </div> : null}  
        </div>

        <div>
            <Button onClick={this.DataTypes3}><h6><u>OPP's Concepts </u></h6></Button>
            {this.state.ashish3===true ? <div>
                    <ReactPlayer url="https://youtu.be/SRu1GAfr3LA" controls={true} loop={true} />
             </div> : null}  
        </div>
        </Container> 
      </div>
    ); 
  
  }
}

export default Python;