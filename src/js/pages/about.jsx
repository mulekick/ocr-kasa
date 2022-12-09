// import modules
import Accordion from "../components/accordion.jsx";
import Banner from "../components/banner.jsx";

// webpack allows direct import of assets in js files ...
import background from "../../img/background-about.png";

const
    // init about component
    AboutPage = props => {
        const a = null;

        return <main>
            <Banner caption="" background={ background } alt="mountain" />
            <div className="container about">
                <Accordion title="Fiabilité" text="broken 😭" />
                <Accordion title="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Accordion title="Service" text="broken 😭" />
                <Accordion title="Responsabilité" text="broken 😭" />
            </div>
        </main>;
    };

export default AboutPage;