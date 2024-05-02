import { JD_TYPE } from "./JDTypes";
import { setJD } from "./JDactions";

const JDreducer = (state = setJD,action) => {
    switch (action.type) {
        case JD_TYPE:
            return{
                ...state,
                role : action.payload.role,
                designatyion : action.payload.designation,
                description : action.payload.description,
                location : action.payload.location,
                bond: action.payload.bond,
                bondType: action.payload.bondType,
                joiningDate : action.payload.joiningDate,
                expectedHires : action.payload.expectedHires,
                weekdays : action.payload.weekdays,
            };
        default:
            return state;
    }
};

export default JDreducer;
