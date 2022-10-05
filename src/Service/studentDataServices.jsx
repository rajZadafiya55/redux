import axios from "axios";
 
export const GetAll = () => {
   return axios.get("https://student-api.mycodelibraries.com/api/student/get")
}
export const post = (singlePerson) => {
   return axios.post("https://student-api.mycodelibraries.com/api/student/add",singlePerson)
}
export const Delete = (id) => {
   return axios.delete(`https://student-api.mycodelibraries.com/api/student/delete?id=${id}`)
}
export const GetId = (id) =>{
   return axios.get(`https://student-api.mycodelibraries.com/api/student/get-student-by-id?id=${id}`)
}
export const Update = (singlePerson) => {
   return axios.post("https://student-api.mycodelibraries.com/api/student/update",singlePerson)
}
