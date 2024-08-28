import Login from "./Pages/Login/Login"
import Home from "./Pages/Home/Home"
import Contacts from "./Pages/Contacts/Contacts"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { WebsocketProvider } from "./Context/SocketContext"
import Sidebar from "./Components/Layout/Sidebar/Sidebar"

const WebsocketLayout = () => {
  return (
    <WebsocketProvider>
      <div className="Home-layout">
        <Sidebar />
          <Outlet />   
      </div>
    </WebsocketProvider>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    element: <WebsocketLayout />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/contacts",
        element: <Contacts />
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}