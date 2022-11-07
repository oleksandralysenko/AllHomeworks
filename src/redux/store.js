import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import charactersReducer from "./reducers/charactersReducer";
import thunk from "redux-thunk";
import rickAndMorty from "./reducers/rickAndMorty";
import {SashaReducer} from "./reducers/SashaReducer"


const rootReducer = combineReducers({
    characters: charactersReducer,
    Sasha: SashaReducer,
    rickAndMorty,
});


const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;