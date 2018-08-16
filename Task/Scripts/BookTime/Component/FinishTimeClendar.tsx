import * as React from 'react'
import * as Datetime from 'react-datetime';



interface FinishTimeClendarProps {
	handleUpdateDateTime: (value) => void;
}

export default class FinishTimeClendar extends React.Component<FinishTimeClendarProps , {}>
{
	constructor(props) {
		super(props);
		this.handleUpdateDateTime = this.handleUpdateDateTime.bind(this);
	}
	handleUpdateDateTime(value) {
		this.props.handleUpdateDateTime(value);
	}
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}
	render() {
		return  <Datetime onChange={this.handleUpdateDateTime} />
	}
}