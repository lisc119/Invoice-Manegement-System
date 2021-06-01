const initialState = {
};

export const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TAG": {
        return {...state, tags: action.tags}
    }
    case "ADD_TAG": {
        const newTag = action.post;
        let newState = {...state};
        let newTags = [...state.tags];
        newTags.unshift(newTag);
        newState.tags = newTags;
        return newState;
    }
    case "LOGOUT": {
        let state = {...initialState};
        return state;
    }
  }
  return {...state}
};


