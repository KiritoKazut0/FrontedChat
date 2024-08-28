import './Sidebar.css';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import { useState } from 'react';


export default function Sidebar() {
    const [selectedItem, setSelectedItem] = useState('');

    const username = localStorage.getItem('username'); 
    const email = localStorage.getItem('email'); 
    const handleSelectItem = (itemId) => {
        setSelectedItem(itemId);
    };

    return (
        <Sheet className="Sidebar">
            <Box className='Sidebar-elements'>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <SendRoundedIcon />
                    <Typography level="title-lg">ChatLoop</Typography>
                </Box>

                <Input size="sm" startDecorator={<SearchRoundedIcon />} placeholder="Search" />

                <Box>
                    <List sx={{ gap: 1 }}>
                        <ListItem>
                            <ListItemButton
                                selected={selectedItem === 'home'}
                                onClick={() => handleSelectItem('home')}
                            >
                                <HomeRoundedIcon />
                                <ListItemContent>
                                    <Typography level="title-sm">Home</Typography>
                                </ListItemContent>
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton
                                selected={selectedItem === 'template'}
                                onClick={() => handleSelectItem('template')}
                            >
                                <DashboardRoundedIcon />
                                <ListItemContent>
                                    <Typography level="title-sm">Template Messages</Typography>
                                </ListItemContent>
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton
                                selected={selectedItem === 'contacts'}
                                onClick={() => handleSelectItem('contacts')}
                            >
                                <ContactsRoundedIcon />
                                <ListItemContent>
                                    <Typography level="title-sm">Contacts</Typography>
                                </ListItemContent>
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton
                                selected={selectedItem === 'messages'}
                                onClick={() => handleSelectItem('messages')}
                            >
                                <QuestionAnswerRoundedIcon />
                                <ListItemContent>
                                    <Typography level="title-sm">Messages</Typography>
                                </ListItemContent>
                                <Chip size="sm" color="primary" variant="solid">
                                    5
                                </Chip>
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton
                                selected={selectedItem === 'settings'}
                                onClick={() => handleSelectItem('settings')}
                            >
                                <SettingsRoundedIcon />
                                Settings
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Box>

            <Box className="Card-UserProfile">
                <Divider />
                <br />
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Avatar />
                    <Box sx={{ minWidth: 0, flex: 1 }}>
                        <Typography level="title-sm">{username}</Typography>
                        <Typography level="body-xs">{email}</Typography>
                    </Box>
                    <IconButton size="sm" variant="plain" color="neutral">
                        <LogoutRoundedIcon />
                    </IconButton>
                </Box>
            </Box>
        </Sheet>
    );
}
