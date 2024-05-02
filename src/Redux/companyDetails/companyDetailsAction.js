import { companyDetails } from "./companyDetailsType";

export const companyDetailsAction = () => {
    return {
        type : companyDetails, 
        companyName : null, 
        about : null,
        website : null,
        category : null, 
        sector : null,
    }
}

