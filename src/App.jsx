import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './appRouter'
import { UserProvider } from './context/appContext'
import { PopupProvider } from './context/popupContext'
import { LodgingProvider } from './context/LodgingContext'
import { SearchProvider } from './context/searchContext'

import { Recover } from './pages'
import { BookingProvider } from './context'

 const App = () => {
    return (
      <UserProvider>
        <PopupProvider>
          <BookingProvider>
            <LodgingProvider>
              <SearchProvider> 
                <RouterProvider router={router} />
                <Recover />
              </SearchProvider>
            </LodgingProvider>
          </BookingProvider>
        </PopupProvider>    
      </UserProvider>
    );
 }
 

export default App
