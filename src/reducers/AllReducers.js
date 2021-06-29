
import { combineReducers } from "redux";
import UserReducer from "./usersReducer";
import fetchReducer from "./fetchReducer";

const AllReducers = combineReducers({
    users: UserReducer,
    fetchRoute: fetchReducer
});

export default AllReducers;

