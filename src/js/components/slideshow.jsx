// import modules
import {useState} from "react";

// webpack allows direct import of assets in js files ...
import left from "../../img/fa-chevron-left.svg";
import right from "../../img/fa-chevron-right.svg";

const
    // init slideshow component
    Slideshow = props => {
        const
            // extract props
            {title, pictures} = props,
            // use state for conditional rendering ...
            [ position, setPosition ] = useState(0);

        return <div className="container slideshow">
            {
                // conditional rendering of slideshow buttons ...
                pictures.length > 1 ?
                    <div>
                        <img src={ left } alt="previous" onClick={ setPosition.bind({}, (position === 0 ? pictures.length : position) - 1) } />
                        <span>{ `${ position + 1 }/${ pictures.length }` }</span>
                        <img src={ right } alt="next" onClick={ setPosition.bind({}, position === pictures.length - 1 ? 0 : position + 1) } />
                    </div> :
                    null
            }
            <img src={ pictures[position] } alt={ title } />
        </div>;
    };

export default Slideshow;