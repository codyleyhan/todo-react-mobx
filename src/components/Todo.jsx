import React from 'react';
import { observer } from 'mobx-react';

import todoStore from '../stores/TodoStore';

@observer
class Todo extends React.Component {
	delete() {
		const task = this.props.todo;
		todoStore.deleteTodo(task);
	}

	toggleComplete() {
		const todo = this.props.todo;
		todo.completed = !todo.completed;
	}

	onDoubleClick() {
		const todo = this.props.todo;
		todo.editing = true;
		console.log(this.props.todo);
	}

	render() {
		const todo = this.props.todo;

		return (
			<div>
   			<span onClick={this.toggleComplete.bind(this)}>{todo.completed ? '\u2714' : '\u2718'}</span>
				<span onDoubleClick={this.onDoubleClick.bind(this)}> - {todo.task} -</span>
				<span onDoubleClick={this.delete.bind(this)}>&#9003;</span>
   		</div>
		);
	}
}

export default Todo;
