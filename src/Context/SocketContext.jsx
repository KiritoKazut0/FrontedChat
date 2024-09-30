import {createContext, useEffect, useCallback, useState } from "react";
import { io } from "socket.io-client";

export const WebsocketContext = createContext();

export const WebsocketProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const [messagesByChat, setMessagesByChat] = useState({});
    const [activeNotify, setActiveNotify] = useState([]);
    const [openSnack, setOpenSnack] = useState(false);
    const [contacts, setContacts] = useState([]);

    const updateMessages = useCallback((chatId, newMessages) => {

        setMessagesByChat(prevMessages => {
            const existingMessages = prevMessages[chatId] || [];
            const existingMessageIds = new Set(existingMessages.map(message => message.id));
            console.log({
                newMessages
            })
            const filteredNewMessages = newMessages.filter(message => !existingMessageIds.has(message.id));
                console.log({
                    existingMessageIds,
                    filteredNewMessages
                })
            return {
                ...prevMessages,
                [chatId]: [
                    ...existingMessages,
                    ...filteredNewMessages
                ]
            };
        });
    }, []);
    
    const updateContacts = useCallback((newContactData) => {
        setContacts(prevContacts => {
            const newContact = Array.isArray(newContactData) ? newContactData[0] : newContactData;
            const contactExists = prevContacts.some(contact => contact._id === newContact._id);
            
            if (contactExists) {
                return prevContacts;
            } else {
                return [...prevContacts, newContact];
            }
        });
    }, []);
    

    useEffect (() => {
        const socketIo = io('http://localhost:3000/', {
             auth: {
                token: localStorage.getItem('token'),
                idContact: '66c824cbbe8aac880bc69d78',
                serverOffset: localStorage.getItem('serverOffset') | 0
            }
        });


        socketIo.on('connect', () => {
            console.log('Conectado al servidor websocket');
        });

        socketIo.on('private_message', (serverOffset, chatId, result) => {
            updateMessages(chatId, result);
            socketIo.auth.serverOffset = serverOffset;
        });

        socketIo.on('newMesssage', (serverOffset, chatId, result) => {
            updateMessages(chatId, result);
            setActiveNotify(result);
            setOpenSnack(true);
            socketIo.auth.serverOffset = serverOffset;
        });

        socketIo.on('contacts', (data) => {
            setContacts(data)
        });

        socketIo.on('newContact', (data) => {
            updateContacts(data);
        })

        socketIo.emit('getContacts');  


        socketIo.on('error', (error) => {
            console.error('Error:', error);
        });

        setSocket(socketIo);

     
        return () => {
            socketIo.disconnect();
        }

    }, []);


    const sendMessage = (data) => {
        if (socket) {
            socket.emit('sendMessage' ,data);
        }
    }

    const requestMessages  = useCallback ((contactId) => {
        if (socket) {
            socket.emit('getMessage', contactId); 
            
        }
    },[socket]);


    const value= {
        sendMessage,
        requestMessages,
        messagesByChat,
        activeNotify,
        openSnack,
        setOpenSnack,
        contacts,
        setContacts
    }

    return (
        <WebsocketContext.Provider value={value}>
            {children}
        </WebsocketContext.Provider>
    );

}