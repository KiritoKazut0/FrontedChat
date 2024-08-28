import './Contacts.css'
import ListContacts from "../../Components/Ui/ListContacts/ListContacts";
import  Box  from "@mui/material/Box";
import Typography from '@mui/joy/Typography';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
export default function Contacts (){
    return(
        <Box className="container-Contacts">
            <Box className='container-icon'>
                  <ContactsRoundedIcon sx={{
                    color: "#000000c3"
                  }}/>
               <Typography level='body-lg' sx={{ fontSize: "24px"}}>List Contacts</Typography> 
             
            </Box>
            
            <ListContacts></ListContacts>
        </Box>
    );
}