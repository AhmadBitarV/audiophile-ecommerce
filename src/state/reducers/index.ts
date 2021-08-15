import { combineReducers } from "redux";
import authReducer from "./authReducer";
import serversReducer from "./serversReducer";

const reducers = combineReducers({
  auth: authReducer,
  servers: serversReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
