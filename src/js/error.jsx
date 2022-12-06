// import modules
import {useRouteError} from "react-router-dom";

const
    // init error page component
    ErrorPage = props => {
        const
            // retrieve error
            e = useRouteError();

        return <main>
            <h1>{ props.message }</h1>
            <p>{ e.statusText || e.message }</p>
        </main>;
    };

export default ErrorPage;