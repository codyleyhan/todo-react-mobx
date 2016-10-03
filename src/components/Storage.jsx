import React from 'react';
import { observer } from 'mobx-react';

import todoStore from '../stores/TodoStore';
import messageStore from '../stores/MessageStore';

import StorageModal from './StorageModal';

@observer
class Storage extends React.Component {
	onLoadClick() {
		todoStore.isLoading = true;
		todoStore.loadTodos().then(() => {
			todoStore.isLoading = false;
			messageStore.addMessage({
				text: 'Successfully loaded all todos',
				duration: 3000
			});
		}).catch(err => {
			console.log(err);
		});
	}

	onSaveClick() {
		todoStore.isSaving = true;
		todoStore.saveTodos().then(() => {
			todoStore.isSaving = false;
			messageStore.addMessage({
				text: 'Successfully saved all todos',
				duration: 3000,
				status: 'success'
			});
		});
	}

	render() {
		const loading = todoStore.isLoading;
		const saving = todoStore.isSaving;

		if(!loading && !saving) {
			return(
				<div className="col-md-12">
					<br />
					<button className="btn btn-info" onClick={this.onLoadClick.bind(this)}>Load todos</button>
					<button className="btn btn-success" onClick={this.onSaveClick.bind(this)}>Save todos</button>
	   		</div>
			)
		} else {
			let message = '';
			loading ? message = 'Loading' : message = 'Saving';
			return(
				<StorageModal message={message} />
			);
		}
	}
}

export default Storage;
