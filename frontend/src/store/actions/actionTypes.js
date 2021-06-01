export const SET_USER = 'SET_USER';
export const SET_TOKEN = 'SET_TOKEN';

// export const SET_TIMEFRAME = 'SET_TIMEFRAME';


export const timeAction = (start, end, activeSub) => {
    return {
        type: "SET_TIMEFRAME",
        payload: [start, end, activeSub],
    };
};

export const filterAction = (start, end, tag, shop, article) => {
    return {
        type: "SET_FILTER",
        payload: [start, end, tag, shop, article],
    };
};

export const subWindowAction = (activeSubWindow) => {
    return {
        type: "SET_SUBWINDOW",
        payload: activeSubWindow,
    };
};

export const logoutAction = {
    type: "LOGOUT"
}