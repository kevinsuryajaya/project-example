import React, { Component } from 'react';
import Content from './content';
import { Comment, comment } from './props';
import Application from './testcss';
import { Container, Row } from 'react-bootstrap';
import Counter from './state';

class Home extends Component {
	state = {
		text: "hello"
	}

	render() {

		return (
			<Container>
				<h2>Home</h2>
				<h3>Test CSS</h3>
				<Row>
					<Application />
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
					<Content />
				</Row>
				<h3>{this.state.text}</h3>
			</Container>
		)
	}
}

export default Home;