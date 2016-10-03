import React from 'react';
import { observer } from 'mobx-react';

import todoStore from '../stores/TodoStore';


class TodoInput extends React.Component {
	constructor() {
		super();
		this.state = {
			task: ''
		};
	}

	onChange(e) {
		this.setState({
			task: e.target.value
		});
	}

	onSubmit() {
		let task = this.state.task;
		todoStore.addTodo(task);
		this.setState({
			task: ''
		})
	}

	onKeyPress(e) {
		if(e.charCode === 13) {
			this.onSubmit();
		}
	}

	render() {
		return (
			<div className="form-inline">
				<div className="form-group">
					<input value={this.state.task}
						placeholder="What do you need to do?"
						onChange={this.onChange.bind(this)}
						className="form-control"
						onKeyPress={this.onKeyPress.bind(this)}
					/>
					<button
						className="btn"
						onClick={this.onSubmit.bind(this)}
					>Add todo</button>
    		</div>
   		</div>
		);
	}
}

export default TodoInput;
