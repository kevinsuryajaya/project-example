import React, {Component} from 'react';
import {Button} from 'react-bootstrap';


class Content extends Component{
    constructor(props){
        super(props);

        this.state={
            isShow: false,
        };
    }

    toggleShow = () => {
        this.setState(state =>({isShow:!state.isShow}));
    };

    render(){
        const text = 'Hello World';

        const Greeting =({text,isShow})=>
        isShow ? <h1>{text}</h1>:null;

        return(
            <div>
                    <Greeting text={text} isShow={this.state.isShow}/>
                    <Button onClick={this.toggleShow} type="button">
                        Click Me!
                    </Button>
            </div>
                   
                   
                 
        );
    }
}




export default Content