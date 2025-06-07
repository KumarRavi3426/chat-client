import axios from "axios";


const url = "http://localhost:8000";

export const addUser = async (data)=>{
    try{
        await axios.post(`${url}/add`, data)
    } catch(error){
        console.log("Error in addUser api", error.message)
    }
}

export const getUsers = async()=>{
    try {
        let response = await axios.get(`${url}/users`)
        return response.data;
    } catch (error) {
        console.log("Error in getUsers api", error.message)
    }
}

export const setConversation = async(data)=>{
    try {
        let response = await axios.post(`${url}/conversation/add`, data)
        return response.data;
    } catch (error) {
        console.log("Error in setConversation api", error.message)
    }
}

export const getConversation = async(data) =>{
    try {
      // for get request :-
      // axios.get(`${url}/conversation/get`, { params: data });
      let response = await axios.post(`${url}/conversation/get`, data);
      return response.data;
    } catch (error) {
        console.log("Error in getConversation api", error.message)
        
    }
}