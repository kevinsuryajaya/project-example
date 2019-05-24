import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, FormControl,InputGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../home/index';
import About from '../about/index';
import Contact from '../contact/index';
import './nav.css';


class Navigation extends Component{
    render(){
        return( 
          <Router>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Example React</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link><Link to={'/home'} className="link">Home</Link></Nav.Link>
      <Nav.Link><Link to={'/about'} className="link">About</Link></Nav.Link>
      <Nav.Link><Link to={'/contact'} className="link">Contact</Link></Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <Switch>
               <Route exact path='/home' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
  </Router>
  
          )
    }
   
}
 export default Navigation