/* eslint-disable jsx-a11y/alt-text, no-shadow */

// import modules
import Accordion from "../components/accordion.jsx";

// webpack allows direct import of assets in js files ...
import yes from "../../img/star-full.svg";
import no from "../../img/star-empty.svg";

const
    // init ad details component
    Description = props => {
        const
            // extract props
            {title, description, host, rating, location, equipments, tags} = props;

        return <div className="container details">
            <div>
                <div>
                    <p>{ title }</p>
                    <p>{ location }</p>
                    { /* render tags, include key */ }
                    <p>{ tags.map((x, i) => <span key={ String(i) } className="tag">{ x }</span>) }</p>
                </div>
                <div>
                    <div>
                        <span>{ host.name }</span>
                        <img src={ host.picture } alt="host" />
                    </div>
                    <p>
                        { /* render rating, include key */ }
                        { [ ...new Array(Number(rating)).fill(true), ...new Array(5 - Number(rating)).fill(false) ].map((x, i) => <img key={ String(i) } src={ x ? yes : no }/>) }
                    </p>
                </div>
            </div>
            <div>
                <Accordion title="Description" text={ description } />
                <Accordion title="Equipements" text={ equipments.map((x, i) => <p key={ String(i) }>{ x }</p>) } />
            </div>
        </div>;
    };

export default Description;