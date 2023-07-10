import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import NotFound from "./views/NotFound";
import Register from "./views/Register";
import AddressCheck from "./views/AddressCheck";
import Thankyou from "./views/Thankyou";
import Address from "./views/Address";
import PersonalDetails from "./views/NewPersonalDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/",
                element: <Register />,
            },
            {
                path: "/register",
                element: <PersonalDetails />,
            },
        ],
    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/address/:id",
                element: <Address />,
            },
            {
                path: "/Address-check",
                element: <AddressCheck />,
            },
            {
                path: "/thankyou",
                element: <Thankyou />,
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
