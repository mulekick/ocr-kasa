/* eslint-disable no-shadow */

// import modules
import {useRouteError, Link} from "react-router-dom";

const
    // init error page component
    ErrorPage = props => {
        const
            // retrieve error
            {status} = useRouteError();


        return <main>
            <div className="container error">
                <h1>{ status }</h1>
                <h4>{ status === 404 ? `Oups! La page que vous demandez n'existe pas.` : `Aïe ! le serveur a rencontré une erreur.` }</h4>
                <Link to={ `` }>Retourner sur la page d’accueil</Link>
            </div>
        </main>;
    };

export default ErrorPage;