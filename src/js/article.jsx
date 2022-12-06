const
    // init article component
    Article = props => {
        const a = null;

        return <article className="container">
            <div className="background" />
            <div className="forefront">
                <span>{ props.title }</span>
            </div>
        </article>;
    };

export default Article;