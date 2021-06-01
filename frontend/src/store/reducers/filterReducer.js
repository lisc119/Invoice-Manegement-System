import getDate from '../../helper/date_helper';

const initialState = {
	timeFrameStart: getDate('12'),
	timeFrameEnd: getDate('0'),
	activeSub: '12',
    tag: null,
    shop: null,
	article: null,
};

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_TIMEFRAME': {
			const newState = { ...state };
			newState.timeFrameStart = action.payload[0];
			if (action.payload[0] === getDate('2')){
				newState.timeFrameEnd = getDate('1');
			}
			else {
				newState.timeFrameEnd = action.payload[1];
			}
			newState.activeSub = action.payload[2];

			return newState;
		}
		case 'SET_FILTER': {
			const newState = { ...state };
			newState.timeFrameStart = action.payload[0];
			newState.timeFrameEnd = action.payload[1];
			newState.tag = action.payload[2];
			newState.shop = action.payload[3];
			newState.article = action.payload[4];
			return newState;
		}
		default:
			return state;
	}
};

export default filterReducer;