import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './appRouter'
import { UserProvider } from './context/appContext'
import { LodgingProvider } from './context/LodgingContext'
import { SearchProvider } from './context/searchContext'

 const App = () => {
    return (
      <UserProvider>
        <LodgingProvider>
          <SearchProvider>
        <RouterProvider router={router} />
        </SearchProvider>
        </LodgingProvider>
        
      </UserProvider>
    );
 }
 

export default App
