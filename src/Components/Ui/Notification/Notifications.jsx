import Snackbar from '@mui/joy/Snackbar';
import { keyframes } from '@mui/system';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import { useContext, useEffect } from 'react';
import { WebsocketContext } from '../../../Context/SocketContext';

const inAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const outAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

export default function Notification() {
    
  const { activeNotify, openSnack, setOpenSnack } = useContext(WebsocketContext);
  const animationDuration = 600;

  const handleClose = () => {
    setOpenSnack(false);
  };

  return (
    <div>
      <Snackbar
         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
         open={openSnack}
         onClose={handleClose}
         autoHideDuration={4000}
         animationDuration={animationDuration}
         sx={{
           ...(openSnack && {
             animation: `${inAnimation} ${animationDuration}ms forwards`,
           }),
           ...(!openSnack && {
             animation: `${outAnimation} ${animationDuration}ms forwards`,
           }),
         }}
      >
        <ListItem>
          <ListItemDecorator>
            <Avatar src="/static/images/avatar/1.jpg" />
          </ListItemDecorator>
          <ListItemContent sx={{ marginLeft: "10px" }}>
            <Typography level="title-sm">{activeNotify[0]?.contactId.name}</Typography>
            <Typography level="body-sm" noWrap>
              {activeNotify[0]?.content}
            </Typography>
          </ListItemContent>
        </ListItem>
      </Snackbar>
    </div>
  );
}
