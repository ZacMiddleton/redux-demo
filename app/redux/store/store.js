import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import tasks from './tasks';
import completed from './completed';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['completed'],
};

const reducers = combineReducers({
    completed,
    tasks,
  });

  const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);