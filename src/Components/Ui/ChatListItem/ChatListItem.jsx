import './ChatListItem.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Profile from "../../../assets/Profile.jpg"
import getContacts from '../../../Service/Contacts/getContacts';
import Input from '@mui/joy/Input';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useState } from 'react';

export default function ChatListItems() {
    const [contacts, setContacts] = useState([]);

    async function getElements() {
        try {
            const data = await getContacts();
            setContacts(data)
        } catch (error) {
            console.log(error)
        }
    }

    getElements();

    return (
        <List className='ListItemContacts' sx={{
            padding: "2% 2% 1% 2%"
        }}>
            <Box sx={{ 
                    display: 'flex', alignItems: 'center',
                    justifyContent: "start" }}>
                <Typography level="title-lg"> Messages </Typography>
            </Box>
            <br />
            <Input size="sm" startDecorator={<SearchRoundedIcon />} placeholder="Search" />
            <br />
            {
                contacts.map((contact) => {
                    return <div key={contact._id}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={Profile} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Typography level='title-sm' component={'span'}>{contact.name}</Typography>}
                                secondary={
                                    <Typography level='body-sm' component={'span'}>{contact.countryCode} {contact.phone}</Typography>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>

                })
            }


        </List>
    );
}
