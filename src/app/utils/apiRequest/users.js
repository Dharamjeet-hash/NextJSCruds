import axios from 'axios';
export const fetchUsersRequest = async () => {
    try{
        let headers = {
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            }
        }
        let res = await axios.get('/api/users',headers)
        return res
    }catch(error){
        throw error
    }
}