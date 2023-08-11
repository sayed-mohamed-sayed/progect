import { configureStore } from "@reduxjs/toolkit";
import books from './bookslice'
import auth from './authSlicee'
export default configureStore({
reducer :{
    books ,
auth
},

})