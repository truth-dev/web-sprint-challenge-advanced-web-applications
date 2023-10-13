// ✨ implement axiosWithAuth
import axios from 'axios';


export const axiosWithAuth = () => {
    console.log(axios.defaults)
    //token from local storage
    const token = localStorage.getItem('token');
   console.log(`sending token: ${token}`)
    return axios.create({
        
        headers: {
            Authorization: `Bearer ${token}`
        }
        
    })
}

