import axios from "axios";

const DeleteContact = async (contactId) => {

    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`http://127.0.0.1:3000/contacts/v1/${contactId}`,{
            headers: {
                  'Authorization': `Bearer ${token}`
            }});
            
            return response.status;

    } catch (error) {
        console.log(error)
        throw error;
    }
}

export default DeleteContact;