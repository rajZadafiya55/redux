import { createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import studentReducer from "./StoreReducers/StoreReducer";

const store = createStore(studentReducer, applyMiddleware(thunk));
export default store;