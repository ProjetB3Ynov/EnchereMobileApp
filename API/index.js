import axios from "axios";

// export const testApi = async () => {
//     try {
//         const {data : {data}} = await axios.get(`
//             http://127.0.0.1:8000/hello`, 
//             {
//             params : {
//             },
//             headers :  {
                
//             }
//         })
//         return data;
//     } catch (error) {
//         return error
//     }
// }

// export const testApi = () => {
//     return axios.get(`http://127.0.0.1:8000/hello`)
//     .then((response)=>console.log(response))
// }

const testApi = async () => {
    try {
      const response = await axios.get('http://10.34.1.52:8000/hello');
  
      //console.log(response.data);
      return response.data;
    } catch (error) {
  
      console.error(error);
      throw error;
    }
  };
  
  export {testApi};
