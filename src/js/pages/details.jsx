/* eslint-disable no-shadow */

// import modules
import {useLoaderData} from "react-router-dom";
import Slideshow from "../components/slideshow.jsx";
import Description from "../components/description.jsx";

const
    // init ad details component
    DetailsPage = props => {
        const
            // retrieve route-specific data
            {title, pictures, description, host, rating, location, equipments, tags} = useLoaderData();

        return <main>
            <Slideshow title={ title } pictures={ pictures } />
            <Description title={title} description={description} host={host} rating={rating} location={location} equipments={equipments} tags={tags} />
        </main>;
    };

export default DetailsPage;