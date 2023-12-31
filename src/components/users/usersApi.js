import axios from "axios";

const instance=axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials:true,
    headers:{
        "API-KEY":"66b4818d-6683-48d7-9d00-f5b4ffa50a22"
    }
})

const UsersApi={
    getUsers(currentPage,pageSize){
       return instance.get(`users?page=${currentPage}&count=${pageSize}`)
       .then(response=>response.data)       
    },
    postFollow(id){
        return instance.post(`follow/${id}`,{})
        .then(response => response.data)
    },
    deleteFollow(id){
        return instance.delete(`follow/${id}`)
        .then(response => response.data)
    }
}
export default UsersApi;