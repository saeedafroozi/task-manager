import * as React from 'react'


interface ShowAlertProps {
	cssClass: string;
	message: string;
}

export default class ShowAlert extends React.Component<ShowAlertProps, {}>
{
	constructor(props) {
		super(props);
	}
	render() {
		const { cssClass, message } = this.props;
		return <div className={`alert ${cssClass}`}>
			< strong > {message}!</strong>
		</div>
	}
}