/* eslint-disable no-shadow */

const
    // init ad title component
    Title = props => {
        const
            // extract props
            {title, location, tags} = props;

        return <div>
            <p>{ title }</p>
            <p>{ location }</p>
            { /* render tags, include key */ }
            <p>{ tags.map((x, i) => <span key={ String(i) } className="tag">{ x }</span>) }</p>
        </div>;
    };

export default Title;