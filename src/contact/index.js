import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Example from './counter'

class Contact extends Component {
  render() {
    return (
      <Container>
        <h2>Contact</h2>
        <Example />
      </Container>
    )
  }
}

export default Contact
