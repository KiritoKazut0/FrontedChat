import axios from "axios";

export const getContacts = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get("http://127.0.0.1:3000/contacts/v1",{
            headers: {
                'token': token
            }
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching initial reactions count:', error);
        throw error;
    }
};


export default getContacts;


