// ✨ implement axiosWithAuth
import axios from 'axios';


 export const axiosWithAuth = () => {
 
    //token from local storage
    const token = localStorage.getItem('token');
   console.log(`sending token: ${token}`)
  
    return axios.create({
        baseURL: 'http://localhost:9000/api',
        headers: {
           Authorization: token
            
        }
        
    });
   
};

