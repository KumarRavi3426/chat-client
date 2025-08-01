import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

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

export const newMessage = async (data)=>{
    try {
        return await axios.post(`${url}/message/add`, data)
    } catch (error) {
        console.log("Error in newMessage api", error.message)
    }
}

export const getMessages = async(id)=>{
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data
    } catch (error) {
        console.log("Error in getMessages api", error.message)
    }
}

export const uploadFile = async (data)=>{
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log("Error in uploadFile api", error.message)
    }
}

