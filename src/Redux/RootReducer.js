import { combineReducers } from 'redux'
import CompanyProfileReducer from './CompanyProfile/CompanyProfileReducer'
import SPreducer from './SP/SPreducer'
import JDreducer from './JD/JDreducer'
import PDreducer from './PD/PDreducer'
import ADreducer from './AD/ADreducer'
import CDreducer from './CD/CDreducer'
import ECreducer from './EC/ECreducer'
import authReducer from './auth/authReducer'
import companyDetailsReducer from './companyDetails/companyDetailsReducer';
import navbarStateReducer from './Navbar/navbarStateReducer';

const RootReducer = combineReducers({
    companyDetails : companyDetailsReducer,
    EC : ECreducer,
    CompanyProfile : CompanyProfileReducer,
    JD : JDreducer,
    PD : PDreducer,
    SP : SPreducer,
    auth : authReducer,
    AD : ADreducer,
    CD : CDreducer,
    navbar : navbarStateReducer
})

export default RootReducer