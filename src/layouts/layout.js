import React, { Component } from 'react';
import Navigation from './navbar';
import Content from '../content';
import {Comment,comment} from '../props';
import Application from '../testcss';
import {Container,Row} from 'react-bootstrap';
import Counter from '../state';

class Layout extends Component{
render(){
    return(
        <div>
            <h3>Test Bootstrap</h3>
        <Navigation/>
            <Container>
            <h3>Test CSS</h3>
                <Row>
                    <Application/>
                </Row>

            <h3>Test Props</h3>
                <Row>
                    <Comment date={comment.date} text={comment.text} author={comment.author} />
                </Row>

            <h3>Test State</h3>
                <Row>    
                    <Counter />
                </Row>  

            <h3>Test Props n State</h3>
                <Row>    
                    <Content/>
                </Row>
               
                   
            </Container>
        </div>
       )
}
}

export default Layout;