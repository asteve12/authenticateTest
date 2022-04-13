import {configureStore} from  "@reduxjs/toolkit"
import signup from "./reducer"
import login from "./loginreducer"

const store = configureStore({
  reducer: {
    signup: signup,
    login: login,
  },
});


export default store;