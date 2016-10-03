import { observable, computed } from 'mobx';

class Message {
	@observable text;
	@observable duration;
	@observable status;

	constructor({ text ,duration = 3000, status = 'info' }) {
		this.text = text;
		this.duration = duration;
		this.status = status;
	}

	get class() {
		return 'alert alert-' + this.status;
	}
}

class MessageStore {
	@observable messages = [];

	addMessage({text, duration, status}) {
		this.messages.push(new Message({text, duration, status}));
	}

	removeMessage(message) {
		const index = this.messages.indexOf(message);
		this.messages.splice(index, 1);
	}
}

const messageStore = new MessageStore();

export default messageStore;
