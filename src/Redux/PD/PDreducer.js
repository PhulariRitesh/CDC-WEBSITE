import { PD_TYPES } from "./PDTypes";
import PDActions from "./PDactions";

const PDreducer = (state = PDActions, action) =>{
    
    switch(action.type){
        case PD_TYPES:
            return{
                ...state, 
                b_ctc : action.payload.b_ctc,
                m_ctc : action.payload.m_ctc,
                p_ctc : action.payload.p_ctc,
                b_desc : action.payload.b_desc,
                m_desc : action.payload.m_desc,
                p_desc : action.payload.p_desc,
            }
        default : return state;
    }
}

export default PDreducer;