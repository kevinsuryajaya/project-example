import React, {Component} from 'react';
import {Container,Row} from 'react-bootstrap';
function formatDate(date){
    return date.toLocaleDateString();
}

function Avatar(props){
    return(
        <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
        />
    );
}

function UserInfo(props){
    return(
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    );
}

export const Comment = (props) =>{
    return(
        <Container>
            <br></br>
            <Row>
            <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
            {formatDate(props.date)}
            </div>
        </div>
            </Row>
        </Container>
        
    );
}

export const comment = {
    date: new Date(),
    text: 'testing',
    author: {
        name: 'Kevin',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
}
