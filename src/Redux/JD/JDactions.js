import { JD_TYPE } from "./JDTypes";

export function setJD(){
    return{
        type: JD_TYPE,
        role:"",
        designation:"",
        description:"",
        location:"",
        bond: null,
        bondType: "",
        joiningDate :"DD/MM/YYYY",
        expectedHires:0,
        workingWeekDays:0,
    };
}




