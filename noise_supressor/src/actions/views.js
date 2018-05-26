import {
 	SET_VIEW_SHOWN,
	SHOW_VIEW
} from './../constants/views';

export const showForm = (viewName) => ({
	type: SHOW_VIEW,
	viewName
});

export const setViewShown = () => ({
	type: SET_VIEW_SHOWN
});
