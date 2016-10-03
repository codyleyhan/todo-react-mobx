import { observable, computed } from 'mobx';

class Todo {
	@observable task;
	@observable completed = false;
	@observable editing = false;

	constructor(task) {
		this.task = task;
	}
}


class TodoStore {
	@observable todos = [];
	@observable isLoading = false;
	@observable isSaving = false;

	addTodo(task) {
		this.todos.push(new Todo(task));
	}

	@computed get progress() {
		const total = this.todos.length;
		if(total === 0) {
			return 0;
		}

		const completed =  this.todos.filter(todo => {
			return todo.completed === true;
		}).length;

		const progress = parseInt(completed / total * 100, 10);
		return progress;
	}

	deleteTodo(task) {
		const index = this.todos.indexOf(task);
		this.todos.splice(index, 1);
	}

	saveTodos() {
		let promise = new Promise((resolve, reject) => {
			if(this.todos.length > 0) {
				const todos = {
					todos: this.todos
				};
				const todosString = JSON.stringify(todos);
				localStorage.setItem('test-todos', todosString);
				setTimeout(() => {
					return resolve();
				},200);
			}
		});

		return promise;
	}

	loadTodos() {
		const todosString = localStorage.getItem('test-todos');
		let promise = new Promise((resolve, reject) => {
			if(todosString) {
				setTimeout(() => {
					let data = JSON.parse(todosString);
					this.todos = data.todos;
					return resolve(data.todos);
				},200);
			}
		});

		return promise;
	}
}

const todoStore = new TodoStore();


export default todoStore;
