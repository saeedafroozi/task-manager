import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import BookTime from './Component/BookTime';
import BookTimeList from '../BookTimeList/Component/BookTimeList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



$(() => ReactDOM.render(
	<Router>
		<div>
			<ul>
				<li key='1'><Link to="/">Home</Link></li>
				<li key='2'><Link to="/BookTime">BookTime</Link></li>
				<li key='3'><Link to="/BookTimeList">BookTimeList</Link></li>
			</ul>

			<hr />

			<Route exact path="/" component={() => <div>
				<h2>You Can Book Time And See BookTimeList</h2>
			</div>} />
			<Route path="/BookTime" component={BookTime} />
			<Route path="/BookTimeList" component={BookTimeList} />
		</div>
	</Router>
	, $("#app")[0]));



