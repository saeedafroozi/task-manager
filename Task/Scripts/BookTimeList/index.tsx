import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import BookTimeList from './Component/BookTimeList';



$(() => ReactDOM.render(<BookTimeList />, $("#app")[0]));

