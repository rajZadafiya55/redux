import { ADD_DATA, DELETE_DATA, GET_BY_ID, GET_DATA, UPDATE_DATA } from "../StoreTypes/StoreTypes";

const initialState = {
    student: [],
    allPerson: ""
}

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return { ...state, student: action.payload };
        case ADD_DATA:
            return { ...state };
        case DELETE_DATA:
            return { ...state, student: state.student.filter((res) => res._id !== action.payload) };
        case GET_BY_ID:
            return { ...state, allPerson: action.payload };
        case UPDATE_DATA:
            return {...state};    
        default: return state; 
    }
}
export default studentReducer