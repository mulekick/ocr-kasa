/* eslint-disable no-shadow */

// import modules
import {useLoaderData} from "react-router-dom";
import Slideshow from "../components/slideshow.jsx";
import Title from "../components/title.jsx";
import User from "../components/user.jsx";
import Accordion from "../components/accordion.jsx";

const
    // init ad details component
    DetailsPage = props => {
        const
            // retrieve route-specific data
            {title, pictures, description, host, rating, location, equipments, tags} = useLoaderData();

        return <main>
            <Slideshow title={ title } pictures={ pictures } />
            <div className="container details">
                <div>
                    <Title title={ title } location={ location } tags={ tags } />
                    <User user={ host } rating={ rating } />
                </div>
                <div>
                    <Accordion title="Description" text={ <p>{description}</p> } />
                    <Accordion title="Equipements" text={ equipments.map((x, i) => <p key={ String(i) }>{ x }</p>) } />
                </div>
            </div>
        </main>;
    };

export default DetailsPage;