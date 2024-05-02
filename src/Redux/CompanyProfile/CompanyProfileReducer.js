import { SET_CATEGORY } from "./CompanyProfileTypes";
import { SET_SECTOR } from "./CompanyProfileTypes";
import { SET_BUTTONS } from "./CompanyProfileTypes";

const initialState = {
  category: "",
  sector: "",
  buttons: 1,
};

const CompanyProfileReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case SET_SECTOR:
      return {
        ...state,
        sector: action.payload,
      };
    case SET_BUTTONS:
      return {
        ...state,
        buttons: action.payload,
      };


    default:
      return state;
  }
};

export default CompanyProfileReducer;
