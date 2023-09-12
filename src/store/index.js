import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { cartSlice } from "./cart";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import {
  persistReducer,
  REHYDRATE,
  persistStore,
} from "redux-persist";

const persistConfig = {
  key: authSlice.name,
  storage,
  REHYDRATE
};
export const rootReducers = combineReducers({
  [authSlice.name]: persistReducer(persistConfig, authSlice.reducer),
  cart: cartSlice.reducer,
});

const store = configureStore({
  reducer: rootReducers,
  middleware:[thunk]
});
export const persistor = persistStore(store);
export default store;
