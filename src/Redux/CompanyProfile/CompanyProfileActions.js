import { SET_BUTTONS,SET_CATEGORY, SET_SECTOR } from "./CompanyProfileTypes";


export function setCategory(value) {
  return {
    type: SET_CATEGORY,
    payload: value,
  };
}

export function setSector(value) {
  return {
    type: SET_SECTOR,
    payload: value,
  };
}


export function setButtons(value) {
  return {
    type: SET_BUTTONS,
    payload: value,
  };
}
