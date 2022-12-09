/* eslint-disable jsx-a11y/alt-text, no-shadow */

// webpack allows direct import of assets in js files ...
import yes from "../../img/star-full.svg";
import no from "../../img/star-empty.svg";

const
    // init user component
    User = props => {
        const
            // extract props
            {user, rating} = props;

        return <div>
            <div>
                <span>{ user.name }</span>
                <img src={ user.picture } alt="user" />
            </div>
            <p>
                { /* render rating, include key */ }
                { [ ...new Array(Number(rating)).fill(true), ...new Array(5 - Number(rating)).fill(false) ].map((x, i) => <img key={ String(i) } src={ x ? yes : no }/>) }
            </p>
        </div>;
    };

export default User;