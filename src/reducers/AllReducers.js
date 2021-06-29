
import { combineReducers } from "redux";
import DataReducer from "./DataReducer";
import FetchReducer from "./FetchReducer";

const AllReducers = combineReducers({
    data: DataReducer,
    fetchRoute: FetchReducer
});

export default AllReducers;

