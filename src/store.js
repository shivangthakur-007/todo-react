import { createStore, combineReducers} from "redux";

// Reducer imports 
import todoReducer from "./Reducer/todoReducer";

const reducers= combineReducers({todo: todoReducer});

const store= createStore(reducers);

export default store;