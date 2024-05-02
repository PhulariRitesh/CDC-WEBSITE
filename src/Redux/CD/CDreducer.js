import {NAME,ROLL,DATE_BIRTH,CONTACT,ALTERNATE_CONTACT,EMAIL_INSTITUTE,EMAIL_PERSONAL,CURRENT_ADDRESS,PERMANENT_ADDRESS,CURRENT_ADDRESS_PINCODE,PERMANENT_ADDRESS_PINCODE} from './CDTypes'

import {setAlternate,setC_Pincode,setContact,setCurrent,setDate,setEmail_I,setNEmail_P,setName,setP_Pincode,setPermanent,setRoll} from './CDactions'

const initialState = {
    name: "",
    roll: "",
    date_birth: "",
    contact: "",
    alternate_contact: "",
    email_institute: "",
    email_personal: "",
    current_address: "",
    current_address_pincode: "",
    permanent_address: "",
    permanent_address_pincode: "",
};

const CDreducer = (state = initialState,action) => {
    switch (action.type) {
        case NAME:
            return{
                ...state,
                name: action.payload,
            };
        case ROLL:
            return{
                ...state,
                roll: action.payload,
            };
        case DATE_BIRTH:
            return{
                ...state,
                date_birth: action.payload,
            };
        case CONTACT:
            return{
                ...state,
                contact: action.payload,
            };
        case ALTERNATE_CONTACT:
            return{
                ...state,
                alternate_contact: action.payload,
            };
        case EMAIL_INSTITUTE:
            return{
                ...state,
                email_institute: action.payload,
            };
        case EMAIL_PERSONAL:
            return{
                ...state,
                email_personal: action.payload,
            };
        case CURRENT_ADDRESS:
            return{
                ...state,
                current_address: action.payload,
            };
        case CURRENT_ADDRESS_PINCODE:
            return{
                ...state,
                current_address_pincode: action.payload,
            };
        case PERMANENT_ADDRESS:
            return{
                ...state,
                permanent_address: action.payload,
            };
        case PERMANENT_ADDRESS_PINCODE:
            return{
                ...state,
                permanent_address_pincode: action.payload,
            };
        default:
            return state;
    }
}

export default CDreducer;