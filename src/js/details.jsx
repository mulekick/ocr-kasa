// import modules
import {useLoaderData} from "react-router-dom";

const
    // init ad details component
    DetailsPage = props => {
        const
            // retrieve route-specific data
            ad = useLoaderData();

        return <main>
            <h1>{ `This page should display ad details about ad ${ ad.title }` }</h1>
        </main>;
    };

export default DetailsPage;