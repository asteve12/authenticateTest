import {configureStore} from  "@reduxjs/toolkit"
import signup from "./reducer"
import login from "./loginreducer"
import authenticate from "./authenticate"
import verifyTk from "./verifyEmail"
import sendMessage from "./sendChat"
import updateBlog from "./updatetext"

const store = configureStore({
  reducer: {
    signup: signup,
    login: login,
    authenticate: authenticate,
    verifyToken: verifyTk,
    sendMessage: sendMessage,
    updateBlog:updateBlog
  },
});


export default store;