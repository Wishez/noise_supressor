import {
 	SET_VIEW_SHOWN,
	SHOW_VIEW
} from './../constants/views';

export const initialState = {
	shownViewName: '',
	didFadeIn: false
};

const views = (
	state=initialState,
	action
) => {
	switch (action.type) {
		case SHOW_VIEW:
			return {
				didFadeIn: false,
				shownViewName: action.shownViewName
			};

		case SET_VIEW_SHOWN:
			return {
				...state,
				didFadeIn: true
			};

		default:
			return state;
	}
}

export default views;
