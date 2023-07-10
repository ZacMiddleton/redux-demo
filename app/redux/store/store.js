import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import taskHandlerReducer from "../store/ItemActions";

const reducers = {
  taskHandlerReducer,
};

let store;
let persistor;

if (typeof window !== "undefined") {
  const persistConfig = {
    key: "root",
    storage,
    whitelist: ["taskHandler"],
  };

  const rootReducer = combineReducers(reducers);
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
  });
  persistor = persistStore(store);
} else {
  store = configureStore({
    reducer: reducers,
    middleware: [thunk],
  });
  persistor = null;
}

export { store, persistor };
