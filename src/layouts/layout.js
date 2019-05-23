import React, { Component } from 'react';
import Navigation from './navbar';
import Content from '../content';
import {Comment,comment} from '../props';

class Layout extends Component{
render(){
    return(
        <layout>
            <Navigation/>
            <Content/>
            <Comment date={comment.date} text={comment.text} author={comment.author} />
            
        </layout>
    )
}
}

export default Layout;