import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';
import { Stack } from '@mui/joy';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { useContext } from 'react';
import { WebsocketContext } from '../../../Context/SocketContext';

export default function MessageInput({ textAreaValue, setTextAreaValue, onSubmit, dataContact}) {
  
  const {sendMessage} = useContext(WebsocketContext);

  const handleClick = () => {
    if (textAreaValue.trim() !== '') {
      onSubmit();

      sendMessage({
        phone: dataContact.phone,
        message: textAreaValue,
        countryCode: dataContact.countryCode,
        id: dataContact._id,
        name: dataContact.name
      });

      setTextAreaValue('');
    }
  };
  return (
    <Box sx={{ px: 2, pb: 3 }}>
      <FormControl>
        <Textarea
          placeholder="Type something here…"
          aria-label="Message"
          onChange={(e) => {
            setTextAreaValue(e.target.value);
          }}
          value={textAreaValue}
          minRows={3}
          maxRows={5}
          endDecorator={
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexGrow={1}
              sx={{
                py: 1,
                pr: 1,
                borderTop: '1px solid',
                borderColor: 'divider',
              }}
            >
              <div></div>
              <Button
                size="sm"
                color="primary"
                sx={{ alignSelf: 'center', borderRadius: 'sm' }}
                endDecorator={<SendRoundedIcon />}
                onClick={handleClick}
              >
                Send
              </Button>
            </Stack>
          }
          onKeyDown={(event) => {
            if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
              handleClick();
            }
          }}
          sx={{
            '& textarea:first-of-type': {
              minHeight: 72,
            },
          }}
        />
      </FormControl>
    </Box>
  );
}