import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../home/index'
import About from '../about/index'
import Contact from '../contact/index'
import App from '../Modal/index'
import Nested from '../NestedModal/index'
import styled from 'styled-components'
import './nav.css'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class Navigation extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"><Title>Example React</Title></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to={'/home'} className="link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/about'} className="link">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/contact'} className="link">
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/Modal'} className="link">
                Modal
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/NestedModal'} className="link">
                Nested Modal
              </Link>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/Modal" component={App} />
          <Route path="/NestedModal" component={Nested} />
        </Switch>
      </Router>
    )
  }
}
export default Navigation
