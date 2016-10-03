import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import todoStore from './stores/TodoStore.js';
import messageStore from './stores/MessageStore.js';

import TodoList from './components/TodoList.jsx';
import TodoInput from './components/TodoInput.jsx';
import Message from './components/Message.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import Storage from './components/Storage.jsx';

@observer
class App extends Component {
  render() {
		let messages = null;
		if(messageStore.messages.length > 0) {
			messages = messageStore.messages.map((message, index) => {
				return <Message message={message} key={index} />;
			});
		}

    return (
      <div className="container">
				<DevTools />
        <div className="col-md-8 col-md-offset-2">
					<h1 className="text-center">Todo List</h1>
					{messages}
					<h2 className="text-center">Progress: {todoStore.progress}%</h2>
					<ProgressBar percent={todoStore.progress} />
					<div className="col-md-10 col-md-offset-1">
						<TodoList todos={todoStore.todos} />
						<TodoInput />
						<Storage />
     			</div>
        </div>
      </div>
    );
  }
};

export default App;
