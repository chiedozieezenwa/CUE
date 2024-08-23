import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './appRouter'
import { UserProvider } from './context/appContext'
import { PopupProvider } from './context/popupContext'
import { LodgingProvider } from './context/LodgingContext'
import { SearchProvider } from './context/searchContext'

 const App = () => {
    return (
      <UserProvider>
        <PopupProvider>
          <LodgingProvider>
            <SearchProvider>
              <RouterProvider router={router} />
            </SearchProvider>
          </LodgingProvider>
        </PopupProvider>    
      </UserProvider>
    );
 }
 

export default App
