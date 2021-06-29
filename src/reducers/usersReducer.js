const initialState = [];

const UserReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INIT':
            return state;
        default:
            return state;
    }
}

export default UserReducer;
