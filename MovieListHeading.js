import React from "react";

    const MovieListHeading = (props) => {
        return(
            <div className="movie-list-heading">
                {props.heading && <h1>{props.heading}</h1>}
            </div>
        )
    }
    


export default MovieListHeading;