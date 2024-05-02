import { companyDetails } from "./companyDetailsType";
import { companyDetailsAction } from "./companyDetailsAction";

const companyDetailsReducer = (state = companyDetailsAction, action) => {
    switch (action.type) {
        case companyDetails:
            return{
                ...state,
                companyName : action.payload.companyName,
                about : action.payload.about,
                website : action.payload.website,
                category : action.payload.category,
                sector : action.payload.sector
            }
        default : return state;
    }
}

export default companyDetailsReducer;