import axios from "axios";

export const getInicialMessages = async (id) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://127.0.0.1:3000/messages/v1/all/${id}`,{
            headers: {
                'token': token
            }
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}