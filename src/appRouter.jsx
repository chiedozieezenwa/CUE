import { createBrowserRouter } from "react-router-dom";
import { Discover, Home } from "./pages";
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
    }
])

export default router;