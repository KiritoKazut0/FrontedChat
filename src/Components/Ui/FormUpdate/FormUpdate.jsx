import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import useField from '../../../Hooks/useField';

export default function FormUpdate({handlerEdit, id}) {
  const [open, setOpen] = useState(false);
  const name = useField({type: 'name'});

  return (
    <>
      <Button
        color="primary"
        startDecorator={<EditIcon sx={{ transform: 'rotate(265deg)'}}  />}
        onClick={() => setOpen(true)}
        sx={{height: "45%"}}
      >
       Edit
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog sx={{
          width: "30%"
        }}>

          <DialogTitle>Update contact name </DialogTitle>
          <DialogContent>Please enter the new contact name below:</DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handlerEdit( name.value, id)
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input autoFocus required
                   placeholder='John Doe'
                   onBlur={name.onBlur}
                   onChange={name.onChange} />
              </FormControl>

              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
