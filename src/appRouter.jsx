import { createBrowserRouter } from "react-router-dom";
import { Discover, Home } from "./pages";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/discover",
        element: <Discover />
    }
])

export default router;