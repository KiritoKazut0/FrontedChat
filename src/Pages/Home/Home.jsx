import { WebsocketProvider } from "../../Context/SocketContext";
import Sidebar from "../../Components/Layout/Sidebar/Sidebar";
import './Home.css'
import ChatListItems from "../../Components/Ui/ChatListItem/ChatListItem";
export default function Home () {

    return (
        <WebsocketProvider>
        <div className="Home-layout">
        
            <Sidebar></Sidebar>
            <ChatListItems></ChatListItems>
       
           
        </div>
        </WebsocketProvider>
    );
}