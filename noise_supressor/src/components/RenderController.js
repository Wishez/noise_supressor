import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ID} from '../constants/pureFunctions';

class RenderController extends Component {
	state = {
		inputId: ""
	}
	componentDidMount() {
		this.createInputId();
	}

	createInputId() {
		const inputId = `input_${ID()}`;

		this.setState({
			inputId
		});
	}

	render() {
		const {input,
		meta: {
			touched,
			error,
			warning
		},
		block,
		label,
		...rest
	} = this.props;
		const {
			inputId
		} = this.state;


		return (
			<div className="controller">
				{label ?
					<label htmlFor={inputId}
						onClick={this.focusInput}
					 className='controller__label'>
						{label}
					</label>
					: ''
				}
				<input {...input}
					{...rest}
					id={inputId}
					ref="input"
					className='controller__input' />
				 {touched &&
				 	((error &&
				 		<span className='controller__error formError'>
							{error}
						</span>) ||
				 		(warning && <span className='controller__error formError'>
							{warning}
						</span>))}
			</div>
		);
	}
}
// const RenderController = ({
// 	input,
// 	meta: {
// 		touched,
// 		error,
// 		warning
// 	},
// 	block,
// 	label,
// 	...rest
// }) => (
// 	<div className="controller">
// 		{label ?
// 			<label className='controller__label'>
// 				{label}
// 			</label>
// 			: ''
// 		}
// 		<input {...input}
// 			{...rest}
// 			className='controller__input' />
// 		 {touched &&
// 		 	((error &&
// 		 		<span className='controller__error formError'>
// 					{error}
// 				</span>) ||
// 		 		(warning && <span className='controller__error formError'>
// 					{warning}
// 				</span>))}
// 	</div>
// );

export default RenderController;
