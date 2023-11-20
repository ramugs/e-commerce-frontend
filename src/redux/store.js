import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootSaga from "./saga/rootsaga.js";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer/rootReducer";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
