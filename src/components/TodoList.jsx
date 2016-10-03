import React from 'react';
import { observer } from 'mobx-react';

import Todo from './Todo';
import TodoEdit from './TodoEdit';

@observer
class TodoList extends React.Component {
	render() {
		const todos = this.props.todos;

		const renderedTodos = todos.map((todo, index) => {
			if(todo.editing) {
				return(
					<TodoEdit todo={todo} key={index} />
				);
			}

			return(
				<Todo todo={todo} key={index} />
			);
		});

		return (
			<div className="col-md-12 center-block">
   			{renderedTodos}
				<br />
   		</div>
		);
	}
}

export default TodoList;
