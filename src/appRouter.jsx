import { createBrowserRouter } from "react-router-dom";
import {
  AdminDashboard,
  Adminlodge,
  AdminRentals,
  Ai,
  BookingDetails,
  Disc,
  Home,
  Itineary,
  Lodging,
  Otp,
  Recover,
  RetailCart,
  Signin,
  Trip,
  User,
} from "./pages";
import { Signup } from "./pages/Onboarding/Signup";
import { AdminDashboardLayout } from "./layout";
import { AdminManagement } from "./pages/dashpages/adminManagement";
import { BookingPage } from "./pages/discoverpage/boookinInfos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "signup", element: <Signup /> },
      { path: "signin", element: <Signin /> },
      { path: "recover", element: <Recover /> },
      { path: "otp", element: <Otp /> }
    ],
  },
  {
    path: "/trip",
    element: <Trip />,
  },
  {
    path: "/itineary",
    element: <Itineary />,
  },
  {
    path: "/booking",
    element: <BookingDetails />,
  },
  {
    path: "/ai",
    element: <Ai />,
  },
  {
    path: "/disc",
    element: <Disc />,
  },
  {
    path: "/lodging",
    element: <Lodging />,
  },
  {
    path: "/bookingPage",
    element: <BookingPage />,
  },
  {
    path: "/retailCart",
    element: <RetailCart />,
  },
  {
    path: "/admin",
    element: <AdminDashboardLayout />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "management",
        element: <AdminManagement />,
      },
      {
        path: "lodge",
        element: <Adminlodge />,
      },
      {
        path: "rental",
        element: <AdminRentals />,
      },
    ],
  },
]);

export default router;
