import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "66b4818d-6683-48d7-9d00-f5b4ffa50a22"
    }
});

export const headerApi = {
    isAuth() {
        return instance.get('auth/me') // Изменено здесь
            .then(response => response.data);
    }
};