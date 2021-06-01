
const initialState = {
	window: 'new',
};

const subWindowReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SUBWINDOW': {
			const newState = { ...state };
			newState.window = action.payload;
			return newState;
		}
		default:
			return state;
	}
};

export default subWindowReducer;