import APIRequest from "../utils/config/axios.config";

export default function getRamdonUser(){
    return APIRequest.get('/', {
        validateStatus: function (status) {
            return status < 500; //Resolve only if the status code is less than 500
        }
    });
}

