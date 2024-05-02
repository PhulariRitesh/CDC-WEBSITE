import {PROGRAM,DEPARTMENT,MINOR,ADMISSION,GRADUATION,CGPA,SCHOOL_10,BOARD_10,SCHOOL_12,BOARD_12,PASSING_10,PERCENTAGE_10,PASSING_12,PERCENTAGE_12} from './ADTypes';


export function setProgram(value) {
    return {
      type: PROGRAM,
      payload: value,
    };
  }

export function setDepartment(value) {
    return {
      type: DEPARTMENT,
      payload: value,
    };
  }

export function setMinor(value) {
    return {
      type: MINOR,
      payload: value,
    };
  }

export function setAdmission(value) {
    return {
      type: ADMISSION,
      payload: value,
    };
  }

export function setGraduation(value) {
    return {
      type: GRADUATION,
      payload: value,
    };
  }

export function setCgpa(value) {
    return {
      type: CGPA,
      payload: value,
    };
  }

export function setSchool_10(value) {
    return {
      type: SCHOOL_10,
      payload: value,
    };
  }

export function setBoard_10(value) {
    return {
      type: BOARD_10,
      payload: value,
    };
  }

export function setSchool_12(value) {
    return {
      type: SCHOOL_12,
      payload: value,
    };
  }

export function setBoard_12(value) {
    return {
      type: BOARD_12,
      payload: value,
    };
  }

export function setPercentage_10(value) {
    return {
      type: PERCENTAGE_10,
      payload: value,
    };
  }

export function setPassing_10(value) {
    return {
      type: PASSING_10,
      payload: value,
    };
  }

export function setPercentage_12(value) {
    return {
      type: PERCENTAGE_12,
      payload: value,
    };
  }

export function setPassing_12(value) {
    return {
      type: PASSING_12,
      payload: value,
    };
  }
