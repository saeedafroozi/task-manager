import * as React from 'react'
import { makeTimeByRunningTime } from '../../Common/helper'

interface CardViewProps {
	id: number;
	description: string;
	finishTime: string;
	runningTime: number;
}

export default class CardView extends React.Component<CardViewProps, {}>{
	constructor(props) {
		super(props);
	}
	render() {
		const { runningTime, description, finishTime, id } = this.props;
		const timeObject = makeTimeByRunningTime(runningTime);
		return <div className="card">

			<div className="card-header">
				<div className='row'>
					<div className='col-sm-9'>{description.length < 100 ? description : description.substr(0, 100) + "..."}</div>
					<div className='col-sm-2'>{new Date(finishTime).toLocaleString()}</div>
					<div className='col-sm-1'>{timeObject.hours + ":" + timeObject.minutes + ":" + timeObject.seconds}</div>
				</div>
			</div>

		</div>
	}
}