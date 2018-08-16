import * as React from 'react'
import { fail } from 'assert';


interface OrdinaryRunningTimeProps {
	name: string;
	placeHolder: string;
	max: number;
	maxLength: number;
	handleOrdinaryRunningTime: (e) => void;
}

export default class OrdinaryRunningTime extends React.Component<OrdinaryRunningTimeProps, {}>
{
	constructor(props)
	{
		super(props);
		this.handleManualRunningTime = this.handleManualRunningTime.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	handleManualRunningTime(e)
	{
		this.props.handleOrdinaryRunningTime(e);
	}
	handleKeyPress(e) {
		const { maxLength } = this.props;
		const value = e.currentTarget.value;
		const key = e.key;
		if (value.length > maxLength - 1 || key=='-') {
			e.preventDefault();
		}
	}
	render()
	{
		const { name, placeHolder, max, maxLength } = this.props;
		return <div className="col-sm-1"><input type='number' name={name} placeholder={placeHolder} max={max} min={0} style={{ width: '90px' }}  onKeyPress={this.handleKeyPress} className='form-control' maxLength={maxLength} onBlur={this.handleManualRunningTime} /></div>;
	}
}