import React from "react";

const MovieList = (props) => {
    return (
        <>
        {props.movies.map((movie, index)=> (
        <div className="movie-pic">
            <img src={movie.Poster} alt='movie' ></img>
            <div></div>
        </div>
        ))}
        </>
    );
};

export default MovieList;
