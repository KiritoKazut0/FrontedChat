import './Home.css'
import ChatListItems from "../../Components/Ui/ChatListItem/ChatListItem";
import MessagesPane from "../../Components/Ui/MessagePane/MessagePane";
import { useState } from 'react';
import Notification from '../../Components/Ui/Notification/Notifications';
import ChatWelcome from '../../Components/Ui/ChatWelcome/ChatWelcome';


export default function Home() {

    const [getidContact, setIdContact] = useState('');
    const [getDataContact, setDataContact] = useState({
        _id: '',
        name: '',
        phone: '',
        countryCode: '',
    })

    return (
        <>
            <div className="chat-panel">
                <ChatListItems setIdContact={setIdContact} setDataContact={setDataContact} ></ChatListItems>
                {
                    getidContact ?
                        <MessagesPane id={getidContact} dataContact={getDataContact} ></MessagesPane>
                        : <ChatWelcome />
                }
            </div>
            <Notification />
        </>
    );
}