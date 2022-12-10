/* eslint-disable no-shadow, node/no-unsupported-features/es-syntax */

// import modules
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// imported component must begin with an uppercase letter
import Layout from "./layout.jsx";
import Home from "./pages/home.jsx";
import DetailsPage from "./pages/details.jsx";
import AboutPage from "./pages/about.jsx";

const
    // load locations list (loaders won't work when imported from an external file ?)
    loadLocationsList = async() => {
        try {
            const
                // retrieve ads list
                locations = await import(`../data/logements.json`);
            // return a Fetch API response to comply with the react-router standards
            return new Response(JSON.stringify(locations), {
                status: 200,
                headers: {
                    "Content-Type": `application/json; utf-8`
                }
            });
        } catch (err) {
            throw new Response(err.message, {status: 404});
        }
    },
    // load single location (loaders won't work when imported from an external file ?)
    loadLocation = async({params}) => {
        try {
            const
                // retrieve ads list
                locations = await import(`../data/logements.json`),
                location = Array.from(locations).find(x => x.id === params.id);
            // throw if ad is not found ...
            if (typeof location === `undefined`)
                throw new Error(`nonexistent location`);
            // return a Fetch API response to comply with the react-router standards
            return new Response(JSON.stringify(location), {
                status: 200,
                headers: {
                    "Content-Type": `application/json; utf-8`
                }
            });
        } catch (err) {
            throw new Response(err.message, {status: 404});
        }
    },
    // init router (components states are not persisted on route change ...)
    router = createBrowserRouter([
        {
            path: `/`,
            // init / route
            element: <Layout />,
            // init error handling page (all errors will be handled)
            errorElement: <Layout error={ true } />,
            // each subroute will return the <main> element, which
            // solves to problem of wrapping multiple elements into
            // a single component ...
            children: [ {
                // default outlet for route / (homepage)
                // path: ``,
                index: true,
                element: <Home />,
                // load ads list
                loader: loadLocationsList
            }, {
                // default outlet for route /ads/id (ad detail)
                path: `ads/:id`,
                element: <DetailsPage />,
                // load ad details
                loader: loadLocation
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