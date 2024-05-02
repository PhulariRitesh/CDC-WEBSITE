import { SP_TYPE } from "./SPTypes";

export function setSP(){
  return{
    type: SP_TYPE,
    applicationDeadline: "DD/MM/YYYY",
    ppt : null,
    pptDate: "DD/MM/YYYY",
    resumeShortlisting: null,
    resumeShortlistingDate: "DD/MM/YYYY",
    groupDiscussion: null,
    writtenTest: null,
    testType: [],
    testDescription: "",
    interview: null,
    expectedRounds: 0,
    interviewType: [],
    interviewDescription: "",
  }
}