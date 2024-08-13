import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './appRouter'
import { UserProvider } from './context/appContext'

 const App = () => {
    return (
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    );
 }
 

export default App
