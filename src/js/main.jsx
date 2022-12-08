// import modules
import React from "react";
import {Outlet, Link} from "react-router-dom";
import ErrorPage from "./pages/error.jsx";

// webpack allows direct import of assets in js files ...
import logo from "../img/logo-kasa.png";

const
    // init app
    Kasa = props => {
        const
            // extract props
            {error} = props;

        return <div>
            <header>
                <Link to={ `` }>
                    <img src={ logo } alt="logo" />
                </Link>
                <nav>
                    <ul>
                        <li><Link to={ `` }>Accueil</Link></li>
                        <li><Link to={ `about` }>A propos</Link></li>
                    </ul>
                </nav>
            </header>
            {
                /*
                * the nav + container pattern has to be implemented here
                * use conditional rendering to display the error page in
                * the general navigation context ...
                */
                error ? <ErrorPage message="an error occured :"/> : <Outlet />
            }
        </div>;
    };

export default Kasa;

