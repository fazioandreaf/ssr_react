import { createStore, combineReducers } from "redux";
import * as reducers from "./reducers";

// every reducer fit
const rootReducer = combineReducers({
	numberOfClicks: reducers.numberOfClicksReducer,
});

export const store = createStore(rootReducer);
