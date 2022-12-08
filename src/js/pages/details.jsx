// import modules
import {useLoaderData} from "react-router-dom";
import Slideshow from "../components/slideshow.jsx";
const
    // init ad details component
    DetailsPage = props => {
        const
            // retrieve route-specific data
            {id, title, cover, pictures, description, host, rating, location, equipments, tags} = useLoaderData();

        return <main>
            <Slideshow title={ title } pictures={ pictures } />
            <h1>{ `This page should display ad details about ad ${ title }` }</h1>
        </main>;
    };

export default DetailsPage;