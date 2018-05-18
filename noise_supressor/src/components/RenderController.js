import React from 'react';

const RenderController = ({
	input,
	meta: {
		touched,
		error,
		warning
	},
	block,
	label,
	...rest
}) => (
	<div className="controller">
		{label ?
			<label className='controller__label'>
				{label}
			</label>
			: ''
		}
		<input {...input}
			{...rest}
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

export default RenderController;
