
import { combineReducers } from "redux";
import navReducer from "./navReducer";
import cardReducer from "./cardReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    navReducer,
    cardReducer,
    authReducer
})

export default rootReducer