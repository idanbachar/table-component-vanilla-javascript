
import { combineReducers } from "redux";
import UserReducer from "./usersReducer";

const AllReducers = combineReducers({
    users: UserReducer
});

export default AllReducers;

