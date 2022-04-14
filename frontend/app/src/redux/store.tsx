import {configureStore} from  "@reduxjs/toolkit"
import signup from "./reducer"
import login from "./loginreducer"
import authenticate from "./authenticate"

const store = configureStore({
  reducer: {
    signup: signup,
    login: login,
    authenticate: authenticate,
  },
});


export default store;