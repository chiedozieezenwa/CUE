import { createBrowserRouter } from "react-router-dom";
import {
  AdminDashboard,
  Adminlodge,
  AdminRentals,
  Ai,
  BookingDetails,
  BucketList,
  Disc,
  Home,
  Itineary,
  Lodging,
  Otp,
  Recover,
  RetailCart,
  Signin,
  TopAttractions,
  TopExperiences,
  Trip,
  User,
} from "./pages";
import { Signup } from "./pages/Onboarding/Signup";
import { AdminDashboardLayout } from "./layout";
import { AdminManagement } from "./pages/dashpages/adminManagement";
import { BookingPage } from "./pages/discoverpage/boookinInfos";
import { PaystackOverlay } from "./components/paymentComponent/paystack";
import { CryptoOverlay } from "./components/paymentComponent/crypto";

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
  { path: "trip", element: <Trip /> },

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
    path: "/bucketlist",
    element: <BucketList />,
  },
  {
    path: "/topexperience",
    element: <TopExperiences />,
  },
  {
    path: "/topattractions",
    element: <TopAttractions />,
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
