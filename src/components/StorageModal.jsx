import React from 'react';
import { observer } from 'mobx-react';

@observer
class StorageModal extends React.Component {
	render() {
		return (
			<div className="alert alert-info col-md-12" role="alert">
				<p>{this.props.message}...</p>
			</div>
		)
	}
}

export default StorageModal;
