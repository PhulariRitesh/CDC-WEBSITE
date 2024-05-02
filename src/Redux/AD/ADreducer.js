import {PROGRAM,DEPARTMENT,MINOR,ADMISSION,GRADUATION,CGPA,SCHOOL_10,BOARD_10,SCHOOL_12,BOARD_12,PASSING_10,PERCENTAGE_10,PASSING_12,PERCENTAGE_12} from './ADTypes';

const initialState = {
    program: "",
    department: "",
    minor: "",
    admission: "",
    graduation: "",
    cgpa: "",
    school_10: "",
    board_10: "",
    school_12: "",
    board_12: "",
    passing_10: "",
    percentage_10: "",
    passing_12: "",
    percentage_12: "",
};

const ADreducer = (state = initialState,action) => {
    switch (action.type) {
        case PROGRAM:
            return {
                ...state,
                program: action.payload,
            };
        case DEPARTMENT:
            return {
                ...state,
                department: action.payload,
            };
        case MINOR:
            return {
                ...state,
                minor: action.payload,
            };
        case ADMISSION:
            return {
                ...state,
                admission: action.payload,
            };
        case GRADUATION:
            return {
                ...state,
                graduation: action.payload,
            };
        case CGPA:
            return {
                ...state,
                cgpa: action.payload,
            };
        case PROGRAM:
            return {
                ...state,
                program: action.payload,
            };
        case SCHOOL_10:
            return {
                ...state,
                school_10: action.payload,
            };
        case BOARD_10:
            return {
                ...state,
                board_10: action.payload,
            };
        case SCHOOL_12:
            return {
                ...state,
                school_12: action.payload,
            };
        case BOARD_12:
            return {
                ...state,
                board_12: action.payload,
            };
        case PASSING_10:
            return {
                ...state,
                passing_10: action.payload,
            };
        case PERCENTAGE_10:
            return {
                ...state,
                percentage_10: action.payload,
            };
        case PASSING_12:
            return {
                ...state,
                passing_12: action.payload,
            };
        case PERCENTAGE_12:
            return {
                ...state,
                percentage_12: action.payload,
            };
        default:
            return state;
    }
}

export default ADreducer;