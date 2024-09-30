import { useState } from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DeleteForever from '@mui/icons-material/DeleteForever';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

export default function DeleteModal({handlerDelete, id}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outlined"
        color="danger"
        startDecorator={<DeleteForever />}
        onClick={() => setOpen(true)}
      >
        Delete
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon />
            Confirmation
          </DialogTitle>
          <Divider />
          <DialogContent>
          Are you sure to delete this contact? This action cannot be undone
          </DialogContent>
          <DialogActions>
            <Button variant="solid" color="danger" onClick={() => {
                handlerDelete(id)
                setOpen(false);
            }}>
              Eliminar
            </Button>
            <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </>
  );
}
