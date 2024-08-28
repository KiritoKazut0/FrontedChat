import { WebsocketContext } from '../../../Context/SocketContext';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import MessageInput from '../MessageInput/MessageInput';
import MessagesPaneHeader from '../MessagePaneHeader/MessagePaneHeader';
import { useState, useEffect, useContext, useMemo} from 'react';
import AvatarWithStatus from '../AvatarWhithStatus/AvatarWithStatus';
import ChatBubble from '../ChatBuble/ChatBuble';
import formatTimestamp from '../../../Utils/FormatTimestamp';

export default function MessagesPane({id, dataContact}) {

  const [textAreaValue, setTextAreaValue] = useState('');
  const [chat, setChat] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const { requestMessages, messagesByChat } = useContext(WebsocketContext);

  useEffect(() => {
    requestMessages(id);
  }, [id]);


  const formattedChatMessages = useMemo(() => {
    const chatMessages = messagesByChat[id] || [];
    return chatMessages.map(message => ({
      ...message,
      timestamp: formatTimestamp(message.timestamp),
    }));
  }, [id, messagesByChat]);


useEffect(() => {
  setChat(formattedChatMessages);
}, [formattedChatMessages]);



  return (
    <Sheet
      sx={{
        width: "70%",
        height: { xs: 'calc(100dvh - var(--Header-height))', lg: '100dvh' },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.level1',
      }}>

      <MessagesPaneHeader dataContact={dataContact} />
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          minHeight: 0,
          px: 2,
          py: 3,
          overflowY: 'scroll',
          flexDirection: 'column-reverse',
         
        }}>

        <Stack spacing={2} justifyContent="flex-end">
        {chat?.map((message, index) => {
            const isYou = message.status === 'send';
           
            return (
              <Stack
                key={index}
                direction="row"
                spacing={2}
                flexDirection={isYou ? 'row-reverse' : 'row'}
              >
                {message.status !== 'send' && (
                  <AvatarWithStatus
                    online={false}
                  
                  />
                )}
                <ChatBubble
                
                   sender={isYou ? 'You' : message.contactId.name}
                    content={message.content}
                    timestamp={message.timestamp} 
                    variant={message.status}
                    />
              </Stack>
            );
          })}

        </Stack>
      </Box>
      
      <MessageInput
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
        dataContact={dataContact}
        onSubmit={ () => {  
          setChatMessages([
            ...chatMessages,
            {
              id: dataContact._id,
              sender: 'You',
              content: textAreaValue,
              timestamp: 'Just now',
            },
          ]);
        }}
      /> 
    </Sheet>
  );
}
