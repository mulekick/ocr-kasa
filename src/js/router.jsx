// import modules
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
// imported component must begin with an uppercase letter
import Kasa from "./main.jsx";
import Home from "./home.jsx";

const
    // init router (components states are not persisted on route change ...)
    router = createBrowserRouter([
        {
            path: `/`,
            // init / route
            element: <Kasa />,
            // init error handling page (all errors will be handled)
            errorElement: <Kasa error={ true } />,
            // each subroute will return the <main> element, which
            // solves to problem of wrapping multiple elements into
            // a single component ...
            children: [ {
                // default outlet for route /
                path: ``,
                element: <Home />
            } ]
        }
    ]),
    // create router function component
    Rooter = () => <RouterProvider router={ router } />;

export default Rooter;