import { EC_TYPE } from "./ECTypes";

export function setEC() {
  return {
    type: EC_TYPE,
    cpi: 0,
    branches: [],
    programs: [],
    backlogsAllowed: null,
    numBacklogsAllowed: 0,
    previousGraduates: null,
    additionalCriteria: "",
  }
};
