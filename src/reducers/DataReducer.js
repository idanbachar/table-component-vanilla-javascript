const initialState = [];

const DataReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INIT':
            return action.payload;
        default:
            return state;
    }
}

export default DataReducer;
