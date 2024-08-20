import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './appRouter'
import { UserProvider } from './context/appContext'
import { PopupProvider } from './context/popupContext'

 const App = () => {
    return (
      <UserProvider>
        <PopupProvider>
          <RouterProvider router={router} />
        </PopupProvider>    
      </UserProvider>
    );
 }
 

export default App
