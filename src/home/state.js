import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0
		}
	}

	minus = () => {
		let currentValue = this.state.value

		this.setState({ value: currentValue - 1 })
	}

	plus = () => {
		let currentValue = this.state.value

		this.setState({ value: currentValue + 1 })
	}

	render() {

		return (
			<div>
				<p>Counter: {this.state.value}</p>
				<Button onClick={this.minus}>-</Button>
				<Button onClick={this.plus}>+</Button>
			</div>
		)
	}
}

export default Counter;