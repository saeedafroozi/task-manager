import * as React from 'react'


interface TimeTrackerProps {
	time: any
	status: boolean;
	handleOnClick: () => void;
}

export default class TimeTracker extends React.Component<TimeTrackerProps, {}>
{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.handleOnClick();
}
	render() {
		const { time, status } = this.props;
		return <React.Fragment>
			<div>
				<h1 className="stopwatch-timer">
					<span >{('0' + time.hours).slice(-2)}</span>:<span >{('0' + time.minutes).slice(-2)}</span>:<span >{('0' + time.seconds).slice(-2)}</span>
				</h1>
			</div>
			<div >
				<button onClick={this.handleClick} className={status ? 'stop-btn btn' : 'start-btn btn'}>{status ? 'Stop' : 'Start'}</button>
			</div>
		</React.Fragment>
	}
}