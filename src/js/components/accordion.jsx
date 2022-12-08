// import modules
import {useState, useRef, useEffect} from "react";

// webpack allows direct import of assets in js files ...
import up from "../../img/fa-chevron-up.svg";

const
    // init about component
    Accordion = props => {
        const
            // extract props
            {title, text} = props,
            // use state for conditional rendering ...
            [ active, setActive ] = useState(null),
            // create ref to DOM
            chevron = useRef(null);

        // perform a call after every render
        useEffect(() => {
            // wait for the first click to add animations
            if (active !== null) {
                // remove dead animations
                chevron.current.classList.remove(active ? `open` : `close`);
                // add animations back to run on next repaint
                requestAnimationFrame(() => requestAnimationFrame(() => chevron.current.classList.add(active ? `close` : `open`)));
            }
        });

        return <div className="accordion">
            <div onClick={ setActive.bind({}, active === null ? true : !active) }>
                { title }
                {/* bind ref to DOM element at render time */}
                <img src={ up } alt="open" ref={ chevron } />
            </div>
            {active ? <div>{ text }</div> : null}
        </div>;
    };

export default Accordion;