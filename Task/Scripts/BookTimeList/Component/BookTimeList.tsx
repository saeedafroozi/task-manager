import * as React from 'react'
import { makeTimeByRunningTime } from '../../Common/helper'
import CardView from '../../BookTimeList/Component/CardView'
import Alert from '../../BookTime/Component/ShowAlert'
import { BookTimeList, Enter } from '../../Constant/Constant'
import Spiner from '../../BookTimeList/Component/Spiner'

interface TimeListState {
	taskResult: any;
	searchKey: string;
	isLoading: boolean;
}


export default class TimeList extends React.Component<{}, TimeListState>
{
	allTask: any
	scrollHeight: number
	total: number
	isScrolled: boolean;
	pageIndex: number
	searchMode: boolean
	constructor(props) {
		super(props);
		this.state = {
			taskResult: [],
			searchKey: '',
			isLoading: false
		}
		this.handleScroll = this.handleScroll.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSearchClick = this.handleSearchClick.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.allTask = [];
		this.scrollHeight = 0;
		this.total = 0;
		this.isScrolled = false;
		this.pageIndex = 1;
		this.searchMode = false;
	}
	componentDidMount() {
		this.searchFromServer();
	}


	searchFromServer() {
		if (!this.state.isLoading) {
			this.setState({ isLoading: true });
			$.post('/api/time/Search', { pageIndex: this.pageIndex, key: this.state.searchKey }).done(response => {
				if (this.searchMode) {
					this.setState({ taskResult: response.BookResults });
					this.searchMode = false;
					this.toTop(0);
				}
				else {
					this.setState({ taskResult: this.allTask.concat(response.BookResults) });
				}
				this.setState({ isLoading: false });
				this.allTask = this.state.taskResult;
				this.total = response.Total;
				this.isScrolled = false;
			});
		}

	}
	toTop(height: number) {
		$('#middleContent').scrollTop(height);
	}
	handleScroll(e) {
		this.scrollHeight = e.currentTarget.scrollTop;
		const remainOfAnnouncement = this.total - this.allTask.length;
		if (e.currentTarget.offsetHeight + Math.floor(e.currentTarget.scrollTop) + 90 > e.currentTarget.scrollHeight && !this.isScrolled && Math.floor(e.currentTarget.scrollTop) !== 0 && remainOfAnnouncement) {
			this.isScrolled = true;
			this.pageIndex = this.pageIndex + 1;
			this.searchFromServer();
		}
	}
	handleInputChange(e) {
		const value = e.currentTarget.value;
		this.setState({
			searchKey: value
		});
	}
	handleSearchClick() {
		this.search();
	}
	search() {
		this.pageIndex = 1;
		this.searchMode = true;
		this.searchFromServer();
	}
	handleKeyPress = (event) => {
		if (event.key == Enter) {
			this.search()
		}
	}
	render() {
		const { taskResult, isLoading } = this.state;

		return (
			<div className='container'>
					<Alert cssClass="alert-success" message={BookTimeList} />
					<div className="input-group">
						<input onChange={this.handleInputChange} type="text" className="form-control" onKeyPress={this.handleKeyPress} placeholder="Description" />
						<span onClick={this.handleSearchClick} style={{
							backgroundColor: '#c3c1c1',
							width: '37px',
							textAlign: 'center',
							borderRadius: '5px'
						}} className="input-group-addon"><i className="fa fa-search" style={{ fontsize: '24px', marginTop: '11px' }}></i></span>
					</div>
					<div onScroll={this.handleScroll} id='middleContent' style={{ overflowY: 'scroll', height: '300px' }}>
						<div style={{ 'height': '100%' }}>
							{taskResult.length !== 0 && taskResult.map((task, index) => {
								return <CardView key={task.Id} description={task.Description} finishTime={task.FinishTime} id={task.Id} runningTime={task.RunningTime} />
							})}
						</div>
					</div>
				<Spiner isLoading={isLoading}></Spiner>
			</div>
		);
	}
}