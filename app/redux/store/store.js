import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import tasks from './tasks';
import completed from './completed';
import deleted from './deleted';

const reducers = combineReducers({
    completed,
    tasks,
    deleted,
});

let store;
let persistor;

if (typeof window !== 'undefined') {
    const persistConfig = {
        key: 'root',
        storage,
        whitelist: ['completed', 'tasks'],
    };

    const persistedReducer = persistReducer(persistConfig, reducers);
    store = createStore(persistedReducer, applyMiddleware(thunk));
    persistor = persistStore(store);
} else {
    store = createStore(reducers, applyMiddleware(thunk));
    persistor = null;
}

export { store, persistor };