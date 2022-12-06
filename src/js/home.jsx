// import modules
import Article from "./article.jsx";

// webpack allows direct import of assets in js files ...
import background from "../img/background-default.png";

const
    // init error page component
    HomePage = props => {
        const a = null;

        return <main>
            <div className="container banner">
                <span>Chez vous, partout et ailleurs</span>
                <img src={ background } alt="seashore" />
            </div>
            <br />
            <div className="container gallery">
                <Article title={ `Titre de la location` }/>
                <Article title={ `Titre de la location` }/>
                <Article title={ `Titre de la location` }/>
                <Article title={ `Titre de la location` }/>
                <Article title={ `Titre de la location` }/>
                <Article title={ `Titre de la location` }/>
                <Article title={ `Titre de la location` }/>
                <Article title={ `Titre de la location` }/>
            </div>
        </main>;
    };

export default HomePage;