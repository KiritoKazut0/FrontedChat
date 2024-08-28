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
import Input from '@mui/joy/Input';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ListItemButton from '@mui/joy/ListItemButton';
import { IconButton } from '@mui/joy';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import { WebsocketContext } from '../../../Context/SocketContext';
import { useState, useContext } from 'react';

export default function ChatListItems({ setIdContact, setDataContact }) {
    const [selectItem, setSelectedItem] = useState('');
    const { contacts} = useContext(WebsocketContext)

    const handleSelectItem = async (itemId, phone, countryCode, name) => {
        setDataContact({
            _id: itemId,
            name,
            phone,
            countryCode
        });

        setIdContact(itemId);
        setSelectedItem(itemId);
    };

    return (
        <List className='ListItemContacts' sx={{
            padding: "2% 2% 1% 2%"
        }}>
            <Box sx={{
                display: 'flex', alignItems: 'center',
                justifyContent: "space-between"
            }}>
                <Typography level="title-lg"> Messages </Typography>
                <IconButton
                    variant="plain"
                    aria-label="edit"
                    color="neutral"
                    size="sm"
                    sx={{ display: { xs: 'none', sm: 'unset' } }}
          
                >
                    <CachedRoundedIcon/>
                </IconButton>
            </Box>
            <br />
            <Input size="sm" startDecorator={<SearchRoundedIcon />} placeholder="Search" />

            <br />
            {
                contacts?.map((contact, index) => {
                    return (
                        <ListItemButton
                            selected={selectItem === contact._id}
                            onClick={() => handleSelectItem(contact._id, contact.phone, contact.countryCode, contact.name)}
                            key={index}
                        >
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
                        </ListItemButton>
                    );
                })
            }


        </List>
    );
}
