import axios from "axios";

const token = localStorage.getItem('token');

const updateNameContact = async (name, pk) => {
    try {
        const result = await axios.patch(
            `http://127.0.0.1:3000/contacts/v1/${pk}`,
            { name: name },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        return result.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default updateNameContact;
