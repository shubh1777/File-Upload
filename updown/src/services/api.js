import axios from 'axios';
 const API_URL='https://file-upload-v.vercel.app/'; 
export const uploadFile = async(data) =>{
      try{
      let response= await  axios.post(`${API_URL}/upload`, data);
      return response.data;
      }catch(error){
           console.log('Error while calling API ',error.message);
      }
}
