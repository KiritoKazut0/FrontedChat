import './Contacts.css';
import ListContacts from "../../Components/Ui/ListContacts/ListContacts";
import Box from "@mui/material/Box";
import Typography from '@mui/joy/Typography';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import { WebsocketContext } from '../../Context/SocketContext';
import { useContext, useEffect, useState } from 'react';
import ModalSucceful from '../../Components/Ui/ModalSucceful/ModalSucceful'; 
import DeleteContact from '../../Service/Contacts/DeleteContact';
import ModalForm from '../../Components/Ui/ModalForm/ModalForm';
import updateNameContact from '../../Service/Contacts/UpdateContacts';
import AddContact from '../../Service/Contacts/AddContacts';

export default function Contacts() {
    const { contacts, setContacts } = useContext(WebsocketContext);
    const [openModal, setOpenModal] = useState(false);
    const [message, setMessage] = useState({
        message: "",
        status: false
    });

    const handlerClickDelete = async (id) => {
        try {
            await DeleteContact(id);
            const updatedContacts = contacts.filter(contact => contact._id !== id);
            setContacts(updatedContacts);
            setMessage({
                message: 'Has been deleted correctly',
                status: true
            });
            setOpenModal(true); 

        } catch (error) {
            console.log(error);
            setMessage({
                message: 'There was an error trying to delete the contact.',
                status: false
            });
            setOpenModal(true); 
         
        }
    };


    const handlerClickUpdate = async (name, pk) => {
        try {
            await updateNameContact(name, pk);
            const updatedContacts = contacts.map(contact =>
                contact._id === pk ? { ...contact, name } : contact
            );
            setContacts(updatedContacts);
            setMessage({
                message: 'The contact name has been updated successfully.',
                status: true
            });
            setOpenModal(true); 
        } catch (error) {
            console.log(error);
            setMessage({
                message: 'There was an error trying to update the contact name.',
                status: false
            });
            setOpenModal(true); 
        }
    };

    const handlerNewContact  = async (name, phone, countryCode) => {
        try {
            await AddContact({name, phone, countryCode});
            setMessage({
                message: 'The contact name has been updated successfully.',
                status: true
            });
            setOpenModal(true); 
        } catch (error) {
            console.log(error);
            setMessage({
                message: 'There was an error creating a new contact',
                status: false
            });
            setOpenModal(true);    
        }
    }

    useEffect(() => {

    }, [contacts])

    return (
        <Box className="container-Contacts">
            <Box className="container-headerContacts">
                <div className='container-icon'>
                    <ContactsRoundedIcon sx={{ color: "#000000c3" }} />
                    <Typography level='body-lg' sx={{ fontSize: "24px" }}>List Contacts</Typography>
                </div>
                <ModalForm handlerAddContact={handlerNewContact} />
            </Box>

            <ListContacts 
                contacts={contacts}
                handlerDeleteContact={handlerClickDelete}
                handlerEditName={handlerClickUpdate} 
                openModal={openModal} 
                setOpenModal={setOpenModal} 

            />
            <ModalSucceful 
                message={message}
                openModal={openModal} 
                setOpenModal={setOpenModal} 
            />
        </Box>
    );
}
