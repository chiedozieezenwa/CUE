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
  Itinerary,
  Lodging,
  Otp,
  Recover,
  Rentals,
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
import PaymentConfirmation from "./pages/discoverpage/retailCart/confirmation/confirmation";
import PaymentReceipt from "./pages/discoverpage/retailCart/paymentReceipt/receipt";
import { SettingsPage } from "./pages/discoverpage/ProfileSetings/settings";
import { ProfilePage } from "./pages/discoverpage/profile/profile";
import { SharePage } from "./pages/discoverpage/profileShare";
import { ReviewRating } from "./components";
import { DiscoverTab } from "./layout/discoverTab";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "signup", element: <Signup /> },
      { path: "signin", element: <Signin /> },
      { path: "recover", element: <Recover /> },
      { path: "otp", element: <Otp /> },
    ],
  },
  {
    path: "/review",
    element: <ReviewRating />,
  },
  {
    path: "/itinerary",
    element: <Itinerary />,
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
    children: [
      {
        path: "discovertab",
        element: <DiscoverTab />,
        children: [
          {
            path: "rentals",
            element: <Rentals />,
          },
          {
            path: "lodging",
            element: <Lodging />,
          },
        ],
      },
    ]
  },
  // {
  //   path: "/discovertab",
  //   element: <DiscoverTab />,
  //   children: [
  //     {
  //       path: "rentals",
  //       element: <Rentals />,
  //     },
  //     {
  //       path: "lodging",
  //       element: <Lodging />,
  //     },
  //   ],
  // },
  {
    path: "trip",
    element: <Trip />,
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
    path: "/paymentConfirmation",
    element: <PaymentConfirmation />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/sharePage",
    element: <SharePage />,
  },
  {
    path: "/paymentReceipt",
    element: <PaymentReceipt />,
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
