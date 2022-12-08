const
    // init banner component
    Banner = props => {
        const
            // extract props
            {caption, background, alt} = props;

        return <div className="container banner">
            <span>{ caption }</span>
            <img src={ background } alt={ alt } />
        </div>;
    };

export default Banner;