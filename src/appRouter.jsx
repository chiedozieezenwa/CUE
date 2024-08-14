import { createBrowserRouter } from "react-router-dom";
import { Ai, Disc, Discover, Home, Itineary, Recover, Signin, Trip } from "./pages";
import { Signup } from "./pages/Onboarding/Signup";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/trip",
        element: <Trip />
    },
    {
        path: "/itineary",
        element: <Itineary />
    },
    {
        path: "/signin",
        element: <Signin />
    },
    {
        path: "/recover",
        element: <Recover />
    },
    {
        path: "/ai",
        element: <Ai />
    },
    {
        path: "/discover",
        element: <Discover />
    },
    {
        path: "/disc",
        element: <Disc />
    }
])

export default router;