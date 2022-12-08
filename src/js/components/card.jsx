const
    // init card component
    Card = props => {
        const
            // extract props
            {title} = props;

        return <article className="container">
            <div className="background" />
            <div className="forefront">
                <span>{ title }</span>
            </div>
        </article>;
    };

export default Card;