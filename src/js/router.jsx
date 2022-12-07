/* eslint-disable node/no-unsupported-features/es-syntax */

// import modules
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// imported component must begin with an uppercase letter
import Kasa from "./main.jsx";
import Home from "./home.jsx";
import DetailsPage from "./details.jsx";
import AboutPage from "./about.jsx";

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
                // default outlet for route / (homepage)
                path: ``,
                element: <Home />,
                // load ads list
                loader: async() => {
                    try {
                        const
                            // retrieve ads list
                            adz = await import(`../data/logements.json`);
                        // return a Fetch API response to comply with the react-router standards
                        return new Response(JSON.stringify(adz), {
                            status: 200,
                            headers: {
                                "Content-Type": `application/json; utf-8`
                            }
                        });
                    } catch (err) {
                        throw new Response(err.message, {status: 404});
                    }
                }
            }, {
                // default outlet for route /ads/id (ad detail)
                path: `ads/:id`,
                element: <DetailsPage />,
                // load ad details
                loader: async({params}) => {
                    try {
                        const
                            // retrieve ads list
                            adz = await import(`../data/logements.json`),
                            ad = Array.from(adz).find(x => x.id === params.id);
                        // throw if ad is not found ...
                        if (typeof ad === `undefined`)
                            throw new Error(`nonexistent ad`);
                        // return a Fetch API response to comply with the react-router standards
                        return new Response(JSON.stringify(Array.from(adz).find(x => x.id === params.id)), {
                            status: 200,
                            headers: {
                                "Content-Type": `application/json; utf-8`
                            }
                        });
                    } catch (err) {
                        throw new Response(err.message, {status: 404});
                    }
                }
            }, {
                // default outlet for route /about (about page)
                path: `about`,
                element: <AboutPage />
            } ]
        }
    ]),
    // create router function component
    Rooter = () => <RouterProvider router={ router } />;

export default Rooter;