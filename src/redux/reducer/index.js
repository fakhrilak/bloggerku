import { combineReducers } from "redux";


import auth from "./auth";
import category from "./category"
import content from "./content"
import user from "./user"

export default combineReducers({category, auth , content , user});