import { createBrowserRouter } from "react-router-dom";
import { AdminDashboard, Adminlodge, AdminRentals, Ai, BookingDetails, Disc, Home, Itineary, Recover, Signin, Trip, User } from "./pages";
import { Signup } from "./pages/Onboarding/Signup";
import { AdminDashboardLayout } from "./layout";
import { AdminManagement } from "./pages/dashpages/adminManagement";

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
        path: "/booking",
        element: <BookingDetails />
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
        path: "/disc",
        element: <Disc />
    },
    {
        path: "/admin",
        element: <AdminDashboardLayout />,
        children: [
            {
                path: "dashboard",
                element: <AdminDashboard />
            },
            {
                path: "user",
                element: <User />
            },
            {
                path: "management",
                element: <AdminManagement />
            },
            {
                path: "lodge",
                element: <Adminlodge />
            },
            {
                path: "rental",
                element: <AdminRentals />
            }
        ]
    }
])

export default router;