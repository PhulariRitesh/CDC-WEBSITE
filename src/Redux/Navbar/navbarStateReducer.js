import navbarStateAction from "./navbarStateAction";
import { navbarState } from "./navbarStateType";
const navbarStateReducer = (state = navbarStateAction, action) =>{

    switch (action.type){
        case navbarState: 
            return{
                ...state,
                currentState: action.payload,

            }
        default : return state
    }   

}

export default navbarStateReducer;