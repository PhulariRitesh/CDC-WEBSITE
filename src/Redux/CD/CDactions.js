import {NAME,ROLL,DATE_BIRTH,CONTACT,ALTERNATE_CONTACT,EMAIL_INSTITUTE,EMAIL_PERSONAL,CURRENT_ADDRESS,PERMANENT_ADDRESS,CURRENT_ADDRESS_PINCODE,PERMANENT_ADDRESS_PINCODE} from './CDTypes'

export function setName(value){
    return{
        type:NAME,
        payload:value,
    }
}

export function setRoll(value){
    return{
        type:ROLL,
        payload:value,
    }
}

export function setDate(value){
    return{
        type:DATE_BIRTH,
        payload:value,
    }
}

export function setContact(value){
    return{
        type:CONTACT,
        payload:value,
    }
}

export function setAlternate(value){
    return{
        type:ALTERNATE_CONTACT,
        payload:value,
    }
}

export function setEmail_I(value){
    return{
        type:EMAIL_INSTITUTE,
        payload:value,
    }
}

export function setNEmail_P(value){
    return{
        type:EMAIL_PERSONAL,
        payload:value,
    }
}

export function setCurrent(value){
    return{
        type:CURRENT_ADDRESS,
        payload:value,
    }
}

export function setC_Pincode(value){
    return{
        type:CURRENT_ADDRESS_PINCODE,
        payload:value,
    }
}

export function setPermanent(value){
    return{
        type:PERMANENT_ADDRESS,
        payload:value,
    }
}

export function setP_Pincode(value){
    return{
        type:PERMANENT_ADDRESS_PINCODE,
        payload:value,
    }
}

