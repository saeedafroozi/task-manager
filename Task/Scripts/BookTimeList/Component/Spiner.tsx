import * as React from 'react'

interface SpinerProps {
	isLoading: boolean;
}

export default class Spiner extends React.Component<SpinerProps, {}>
{
	constructor(props) {
		super(props);
	}
	render()
	{
		const { isLoading } = this.props;
		return <div style={{
			marginTop: '-178px',
			textAlign: 'center'
		}}>
			{isLoading && <i className="fa fa-spinner fa-spin" style={{ fontSize: '70px' }}></i>}
			{!isLoading && this.props.children}
		</div>
	}
}