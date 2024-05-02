import {AUTH} from './authType'

const authAction = () => {
    return {
        type:AUTH,
        userid : null, 
        password : null, 
        token : null,
    }
}

export default authAction;