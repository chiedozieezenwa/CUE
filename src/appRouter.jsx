import { createBrowserRouter } from "react-router-dom";
import { Ai, Discover, Home, Recover, Signin } from "./pages";
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
    }
])

export default router;