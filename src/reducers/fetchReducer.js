const initialState = 'posts';

const fetchReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET':
            if (state !== action.payload)
                return action.payload;
            return state;
        default:
            return state;
    }
}

export default fetchReducer;
