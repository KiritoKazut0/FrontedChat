import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import { useState } from 'react';
import useField from '../../../Hooks/useField';

export default function ModalForm({handlerAddContact}) {
  const [open, setOpen] = useState(false);
  const name = useField({type: 'name'});
  const phone = useField({type: 'phone'});
  const countryCode = useField({type: 'countryCode'});



  return (
    <>
      <Button
        color="success"
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
        sx={{height: "45%"}}
      >
        New Contact
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog sx={{
          width: "30%",
          height: "55%"
        }}>

          <DialogTitle>Create a new contact. </DialogTitle>
          <DialogContent>Fill in the contact details below</DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handlerAddContact(name.value, phone.value, countryCode.value);
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

              <FormControl>
                <FormLabel>Country Code</FormLabel>
                <Input required 
                  placeholder='+52'
                  onChange={countryCode.onChange}
                  onBlur={countryCode.onBlur} />
              </FormControl>

              <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input required 
                  placeholder='1578921152'
                  onChange={phone.onChange}
                  onBlur={phone.onBlur} />
                  
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
