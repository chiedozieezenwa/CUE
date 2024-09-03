import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './appRouter'
import { UserProvider } from './context/appContext'
import { PopupProvider } from './context/popupContext'
import { LodgingProvider } from './context/LodgingContext'
import { SearchProvider } from './context/searchContext'
import {CartProvider} from './context/cartContext'

import { Recover } from './pages'
import { BookingProvider } from './context'

 const App = () => {
    return (
      <UserProvider>
        <PopupProvider>
          <CartProvider>
          <BookingProvider>
            <LodgingProvider>
              <SearchProvider> 
                <RouterProvider router={router} />
                <Recover />
              </SearchProvider>
            </LodgingProvider>
          </BookingProvider>
          </CartProvider>
        </PopupProvider>    
      </UserProvider>
    );
 }
 

export default App
