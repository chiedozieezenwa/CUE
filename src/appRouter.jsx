import { createBrowserRouter } from "react-router-dom";
import { Discover, Home, Itineary, Trip } from "./pages";
import { Signup } from "./pages/Onboarding/Signup";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/discover",
        element: <Discover />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/trip",
        element: <Trip/>
    },
    {
        path: "/itineary",
        element: <Itineary/>
    },
])

export default router;