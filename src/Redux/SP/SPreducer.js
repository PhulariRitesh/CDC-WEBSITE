import { SP_TYPE } from "./SPTypes";
import { setSP } from "./SPactions";

const SPreducer = (state = setSP, action) => {
  switch (action.type) {
    case SP_TYPE:
      return {
        ...state,
        applicationDeadline: action.payload.applicationDeadline,
        ppt: action.payload.ppt,
        pptDate: action.payload.pptDate,
        resumeShortlisting: action.payload.resumeShortlisting,
        resumeShortlistingDate: action.payload.resumeShortlistingDate,
        groupDiscussion: action.payload.groupDiscussion,
        writtenTest: action.payload.writtenTest,
        testType: action.payload.testType,
        testDescription: action.payload.testDescription,
        interview: action.payload.interview,
        expectedRounds: action.payload.expectedRounds,
        interviewType: action.payload.interviewType,
        interviewDescription: action.payload.interviewDescription,
      };
    default:
      return state;
  }
};

export default SPreducer;
