import * as React from 'react'

import { makeTimeByRunningTime } from '../../Common/helper'
import TimeTracker from '../../BookTime/Component/TimeTracker'
import ShowAlert from '../../BookTime/Component/ShowAlert'
import OrdinaryRunningTime from '../../BookTime/Component/OrdinaryRunningTime'
import FinishTimeCalendar from '../../BookTime/Component/FinishTimeClendar'
import { PleaseFillDescription, PleaseFillFinishTime, PleaseFillOrdinaryRunningTime, hours, seconds, minutes, ManualRunningTime, FinishTime, InvalidDate } from '../../Constant/Constant'







interface TimeState {
	status: boolean;
	runningTime: number;
	description: string;
	showManualRunningTime: boolean;
	showSuccessMessage: boolean

}

export default class BookTime extends React.Component<{}, TimeState>
{
	finishDateTime: string
	timer: any
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleInputOnchanage = this.handleInputOnchanage.bind(this);
		this.handleBookClick = this.handleBookClick.bind(this);
		this.handleUpdateDateTime = this.handleUpdateDateTime.bind(this);
		this.handleOrdinaryRunningTime = this.handleOrdinaryRunningTime.bind(this)
		this.state = {
			status: false,
			runningTime: 0,
			description: '',
			showManualRunningTime: false,
			showSuccessMessage: false
		}
		this.finishDateTime = null;
	}

	handleClick() {
		this.setState(state => {
			if (state.status) {
				clearInterval(this.timer);
			}
			else {
				const startTime = Date.now() - this.state.runningTime;
				this.timer = setInterval(() => {
					this.setState({
						runningTime: ((Date.now() - startTime) / 1000)
					});
				}, 50);
			}
			return { status: !state.status };
		});
	}

	handleReset() {
		this.setState({ runningTime: 0, status: false, showManualRunningTime: false, showSuccessMessage: true });
		clearInterval(this.timer);
	}
	handleInputOnchanage(e) {
		const value = e.target.value;
		this.setState({
			description: value,
		});
	}
	handleBookClick() {
		if (this.validation()) {
			$.post('/api/time/Save', { RunningTime: Math.floor(this.state.runningTime), Description: this.state.description, FinishTime: this.finishDateTime }).done(response => {
				this.handleReset();
			});
		}


	}
	validation() {
		let result = true;
		if (this.state.description === '') {
			alert(PleaseFillDescription);
			result = false;
		}
		else {
			if (this.finishDateTime === null) {
				alert(PleaseFillFinishTime);
				result = false;
			}
			else {

				if (this.state.runningTime === 0) {
					this.setState({
						showManualRunningTime: true,
					});
					alert(PleaseFillOrdinaryRunningTime);
					result = false;
				}
			}
		}
		return result;
	}
	handleUpdateDateTime(value) {
		if (value._isValid) {
			this.finishDateTime = value._d.toJSON();
		}
	}
	handleOrdinaryRunningTime(e) {
		const targetName = e.target.name;
		const value = e.target.value;
		if (targetName === hours) {
			this.setState({ runningTime: this.state.runningTime + (Number(value) * 60) * 60 });
		}
		if (targetName === minutes) {
			this.setState({ runningTime: this.state.runningTime + Number(value) * 60 });
		}
		if (targetName === seconds) {
			this.setState({ runningTime: this.state.runningTime + Number(value) });
		}
	}

	render() {
		const { runningTime, status, showManualRunningTime, showSuccessMessage } = this.state;
		const time = makeTimeByRunningTime(runningTime);

		return <React.Fragment>
			{showSuccessMessage &&
				<ShowAlert cssClass="alert-success" message="Book Is Done Successfuly" />
			}
			<div className="stopwatch">
				{!showManualRunningTime && <React.Fragment>
					<TimeTracker status={status} time={time} handleOnClick={this.handleClick} />
				</React.Fragment>}

				<div className="form-group">
					<label>Description:</label>
					<textarea className="form-control" onChange={this.handleInputOnchanage} rows={5} id="comment"></textarea>
				</div>

				{showManualRunningTime &&

					< div className="row" >

					<label>{ManualRunningTime}:</label>
					<OrdinaryRunningTime handleOrdinaryRunningTime={this.handleOrdinaryRunningTime} max={99} maxLength={2} name={hours} placeHolder={hours} />
					:
							<OrdinaryRunningTime handleOrdinaryRunningTime={this.handleOrdinaryRunningTime} max={59} maxLength={2} name={minutes} placeHolder={minutes} />
					:
						<OrdinaryRunningTime handleOrdinaryRunningTime={this.handleOrdinaryRunningTime} max={59} maxLength={2} name={seconds} placeHolder={seconds} />
						<div className="col-sm-1"></div>
					</div>

				}
				<div>
					<label>{FinishTime}:</label>
					<FinishTimeCalendar handleUpdateDateTime={this.handleUpdateDateTime} />
				</div>
				<input type="submit" onClick={this.handleBookClick} className='btn' value="Book" />
			</div>


		</React.Fragment>

	}
}

