import './MessagePanelHeader.css'
import Avatar from '@mui/joy/Avatar';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Box  from '@mui/material/Box';



export default function MessagesPaneHeader({dataContact}) {

  return (
    <Box className = "header-message">
      <Stack direction="row" spacing={{ xs: 1, md: 2 }} alignItems="center">
        <Avatar size="lg" src={'https://pbs.twimg.com/profile_images/911717747628953601/299Tr6M6_400x400.jpg'} />
        <div>
          <Typography
            fontWeight="lg"
            fontSize="sm"
            component="h2"
            noWrap
          >
            {dataContact.name}
          </Typography>
          <Typography level="body-sm">{`${dataContact.countryCode} ${dataContact.phone}`}</Typography>
        </div>
      </Stack>
    </Box>
  );
}