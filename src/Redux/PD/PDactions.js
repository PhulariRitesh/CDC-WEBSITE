import {PD_TYPES} from './PDTypes';

const PDActions =()=> {
    return {
        type:PD_TYPES,
        b_ctc : 0, 
        b_desc : "", 
        m_ctc : 0,
        m_desc : "", 
        p_ctc : 0, 
        p_desc : ""
    }
}

export default PDActions;
