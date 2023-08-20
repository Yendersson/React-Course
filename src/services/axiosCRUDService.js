import axios from "axios";

/**
 * Login method to reqres
 * @param {string} email 
 * @param {string} password 
 */

export const login = (email, password) => {

    let body = {
        email,
        password
    }

    //Returns the response with a Promise
    return axios.post('https://reqres.in/api/login',body)
}

//TODO: Obtain All Users
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users');
}

export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`);
}

//TODO: Obtain User by ID
export const getUserById = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`);
}

//TODO: Create User
export const creareUser = (name, job) => {
    let body = {
        name,
        job
    }

    return axios.post('https://reqres.in/api/users', body);
}


//TODO: Update User
export const updateUser = (id, name, job) => {
    let body = {
        name,
        job
    }

    return axios.put(`https://reqres.in/api/users/${id}`, body);
}
//TODO: Delete User
export const deleteById = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`);
}
