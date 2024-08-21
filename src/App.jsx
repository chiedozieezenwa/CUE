import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './appRouter'
import { UserProvider } from './context/appContext'
<<<<<<< HEAD
import { LodgingProvider } from './context/LodgingContext'
import { SearchProvider } from './context/searchContext'
=======
import { PopupProvider } from './context/popupContext'
>>>>>>> 6364e9e3e989c17c141c7c65fde693552f5957a1

 const App = () => {
    return (
      <UserProvider>
<<<<<<< HEAD
        <LodgingProvider>
          <SearchProvider>
        <RouterProvider router={router} />
        </SearchProvider>
        </LodgingProvider>
        
=======
        <PopupProvider>
          <RouterProvider router={router} />
        </PopupProvider>    
>>>>>>> 6364e9e3e989c17c141c7c65fde693552f5957a1
      </UserProvider>
    );
 }
 

export default App
