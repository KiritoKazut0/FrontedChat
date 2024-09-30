import axios from "axios";

const AddContact = async (data) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
            "http://127.0.0.1:3000/contacts/v1",
            data, 
            {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export default AddContact;
