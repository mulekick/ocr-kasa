// import modules
import React from "react";
// eslint-disable-next-line
import ReactDOM from "react-dom/client";
// imported component must begin with an uppercase letter
import Rooter from "./js/router.jsx";

// direct import of SCSS files on the top component is enough
import "./scss/main.scss";
import "./scss/breakpoints.scss";

ReactDOM
    // package react-dom/client needs only to be loaded on
    // the page that renders the "root" element
    .createRoot(document.getElementById(`root`))
    .render(
        <React.StrictMode>
            <Rooter />
        </React.StrictMode>
    );