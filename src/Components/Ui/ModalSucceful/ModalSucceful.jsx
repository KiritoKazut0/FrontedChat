import { useEffect } from 'react';
import Button from '@mui/joy/Button';
import Snackbar from '@mui/joy/Snackbar';
import DoneIcon from '@mui/icons-material/Done';
import ErrorIcon from '@mui/icons-material/Error';
export default function ModalSucceful({ message, openModal, setOpenModal }) {
  useEffect(() => {
    setOpenModal(openModal);
  }, [openModal, setOpenModal]);

  return (
   
    <Snackbar
      variant="soft"
      color={message.status ? "success": "danger"}
      open={openModal}
      onClose={() => setOpenModal(false)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      startDecorator={message.status? <DoneIcon />: <ErrorIcon/>}

      endDecorator={
        <Button
          onClick={() => setOpenModal(false)}
          size="sm"
          variant="soft"
          color={message.status? "success": "danger"}
        >
          Dismiss
        </Button>
      }
    >
      {message.message}
    </Snackbar>
  );
}
