// import modules
import {Link, useLoaderData} from "react-router-dom";
import Banner from "../components/banner.jsx";
import Card from "../components/card.jsx";

// webpack allows direct import of assets in js files ...
import background from "../../img/background-home.png";

const
    // init error page component
    HomePage = props => {
        const
            // retrieve route-specific data
            adz = Array.from(useLoaderData());

        // return component
        return <main>
            <Banner caption="Chez vous, partout et ailleurs" background={ background } alt="seashore" />
            <div className="container gallery">
                {
                    adz
                        // render ad
                        .map(x => {
                            const
                                // extract properties
                                {id, title} = x;

                            // return component, include key
                            return <Link key={ id } to={`ads/${ id }`}>
                                <Card title={ title }/>
                            </Link>;
                        })
                }
            </div>
        </main>;
    };

export default HomePage;