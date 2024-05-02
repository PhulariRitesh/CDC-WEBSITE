import { EC_TYPE } from "./ECTypes";
import { setEC } from "./ECactions";


export default function ECreducer(state = setEC, action) {
  switch (action.type) {
    case EC_TYPE:
      return {
        ...state,
        cpi: action.payload.cpi,
        branches: action.payload.branches,
        programs: action.payload.programs,
        backlogsAllowed: action.payload.backlogsAllowed,
        numBacklogsAllowed: action.payload.numBacklogsAllowed,
        previousGraduates: action.payload.previousGraduates,
        additionalCriteria: action.payload.additionalCriteria,
      };
    default:
      return state;
  }
}
