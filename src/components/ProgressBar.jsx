import React from 'react';
import { observer } from 'mobx-react';

@observer
class ProgressBar extends React.Component {
	render() {
		return(
			<div className="progress">
			  <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow={this.props.percent} aria-valuemin="0" aria-valuemax="100" style={{
					width: this.props.percent + '%'
				}}>
			  </div>
			</div>
		);
	}
}

export default ProgressBar;
