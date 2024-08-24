import {createContext, useContext, useEffect, useCallback, useState } from "react";
import { io } from "socket.io-client";

export const WebsocketContext = createContext();

export const WebsocketProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const[message, setMessage] = useState({});


    useEffect (() => {
        const socketIo = io('http://localhost:3000/', {
             auth: {
                token: localStorage.getItem('token'),
                idContact: '66c824cbbe8aac880bc69d78',
                serverOffset: localStorage.getItem('serverOffset') | 0
            }
        });


        socketIo.on('connect', () => {
            console.log('Conectado al servidor websocket')
        });

        socketIo.on('private_message', (serverOffset, result) => {
            console.log('Mensaje privado recibido:',{
                serverOffset,
                result
            });
            // socket.auth.serverOffset = serverOffset;
            socketIo.auth.serverOffset = serverOffset;
        });



        socketIo.on('error', (error) => {
            console.error('Error en la conexión WebSocket:', error);
        });

        setSocket(socketIo);

        //desmontar el socket 
        return () => {
            socketIo.disconnect();
        }

    }, []);

    const sendMessage = (contactId, message) => {
        if (socket) {
            socket.emit('send_private_message', {
                contactId, message
            })
        }
    }

    return (
        <WebsocketContext.Provider value={{socket, sendMessage}}>
            {children}
        </WebsocketContext.Provider>
    );

}