import './ChatWelcome.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Typography from '@mui/joy/Typography';
import  Box  from '@mui/material/Box';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
export default function ChatWelcome () {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "70%"
        }}>
            <SendRoundedIcon sx={{fontSize: "60px", color: "#858585", marginBottom: "10px"}}/>
            <Typography level="title-lg" sx={{
                 marginBottom: "10px"
            }}>ChatLoop for Desktop</Typography>
            <Typography level="body-sm">Welcome to the world of ChatLoop, where every message counts.</Typography>
            <Typography level='body-sm'>Connect with your contacts quickly and securely, enjoying a seamless experience.</Typography>
            
        </Box>
    );
}