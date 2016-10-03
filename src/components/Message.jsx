import React from 'react';
import { observer } from 'mobx-react';

import messageStore from '../stores/MessageStore';


class Message extends React.Component {
	componentDidMount() {
		setTimeout(() => {
			messageStore.removeMessage(this.props.message);
		}, this.props.message.duration);
	}

	render() {
		const { text } = this.props.message;
		return (
			<div className={this.props.message.class} role="alert">
   			<p>{text}</p>
   		</div>
		);
	}
}

export default Message;
