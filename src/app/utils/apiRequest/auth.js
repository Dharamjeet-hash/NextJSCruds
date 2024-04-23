import axios from 'axios';


export const loginRequest = async (data) => {
    try{
        let res = await axios.post('/api/login',data)
        return res
    }catch(error){
        throw error
    }
}


export const registerRequest = async (data) => {
    try{
        let res = await axios.post('/api/register',data)
        return res
    }catch(error){
        throw error
    }
}