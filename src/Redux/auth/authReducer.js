import { AUTH } from "./authType";
import authAction from './authAction';

const authReducer = (state = authAction, action) =>{

    switch (action.type){
        case AUTH: 
            return{
                ...state,
                userid : action.payload.userid, 
                password : action.payload.password, 
                token : action.payload.token
            }
        default : return state
    }   
}

export default authReducer;