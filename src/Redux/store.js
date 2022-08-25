// import { combineReducers, createStore} from 'redux'


// const navState = {
//     data: {
//         company_name: "Rizki",
//         logo: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r4.png"
//     }
// }

// const navReducer = (state = navState) =>{
//     return state
// }

// const cardState = {
//     data: {
//         name: "Rizki",
//         avatar: "https://reqres.in/img/faces/7-image.jpg"
//     }
// }

// const cardReducer = (state = cardState) =>{
//     return state
// }
// // const store = createStore (cardReducer)
// const store = createStore(combineReducers({navReducer, cardReducer}))

// export default store

import { createStore } from "redux";
import rootReducer from "./Reducers";

const store = createStore(rootReducer)

export default store