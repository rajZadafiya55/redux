import { Delete, GetAll, GetId, post, Update } from "../../Service/studentDataServices";
import { ADD_DATA, DELETE_DATA, GET_BY_ID, GET_DATA, UPDATE_DATA } from "../StoreTypes/StoreTypes";

const getUsers = (student) => ({
    type: GET_DATA,
    payload: student,
})

export const getStudentData = () => {
    return function (dispatch) {
        GetAll()
            .then((res) => {
                dispatch(getUsers(res.data.data))
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
const addStudent = () => ({
    type: ADD_DATA
})

export const addStudentData = (singleperson, navigate) => {
    return function (dispatch) {
        post(singleperson)
            .then((res) => {
                navigate('/')
                dispatch(addStudent())
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

const deleteStudent = (id) => ({
    type: DELETE_DATA,
    payload: id
})

export const deleteStudentData = (id) => {
    return function (dispatch) {
        Delete(id)
            .then(() => {
                dispatch(deleteStudent(id))
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

const getStudentById = (student) => ({
    type: GET_BY_ID,
    payload: student
})

export const getStudentDataId = (id) => {
    return function (dispatch) {
        GetId(id)
            .then((res) => {
                dispatch(getStudentById(res.data.data))
                console.log(id);
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

const UpdateData = () => ({
    type: UPDATE_DATA
})

export const updateStudentData = (singleperson, navigate) => {
    return function (dispatch) {
        Update(singleperson)
            .then(() => {
                navigate('/')
                dispatch(UpdateData())
            })   
            .catch((error) => {
                console.log(error);
            })
    }
}
