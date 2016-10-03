import React from 'react';
import { observer } from 'mobx-react';

@observer
class TodoEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			task: props.todo.task
		};
	}

	onChange(e) {
		const task = e.target.value;
		this.setState({
			task
		});
	}

	onFinish() {
		const task = this.state.task;
		this.props.todo.task = task;
		this.props.todo.editing = false;
	}

	onKeyPress(e) {
		if(e.charCode === 13) {
			this.onFinish();
		}
	}

	render() {

		return (
			<div className="form-group form-inline">
   			<input
					className="form-control"
					value={this.state.task}
					onChange={this.onChange.bind(this)}
					onBlur={this.onFinish.bind(this)}
					onKeyPress={this.onKeyPress.bind(this)}
					autoFocus
				/>
				<button onClick={this.onFinish.bind(this)} className="btn">
					Finish Editing
				</button>
   		</div>
		);
	}
}

export default TodoEdit;
