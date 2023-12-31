import axios from "axios";

const instance=axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials:true,
    headers:{
        "API-KEY":"66b4818d-6683-48d7-9d00-f5b4ffa50a22"
    }
})

export const profileApi={
    getProfile(userId){
       return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status:status})
    }
}