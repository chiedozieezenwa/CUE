import { createBrowserRouter } from "react-router-dom";
import { Ai, Disc, Discover, Home, Recover, Signin } from "./pages";
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