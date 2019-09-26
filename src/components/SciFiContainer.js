import React from 'react'
import MovieCard from './MovieCard'

const SciFiContainer = (props) => {
    const { sciFiMovies } = props

    const movieList = sciFiMovies.map(movie => {
        return <MovieCard movie={movie} addCurrentMovie={props.addCurrentMovie} switchRating={props.switchRating} />
    })

    return (
        <div className="movies-container">
            {movieList}
        </div>
    )

}

export default SciFiContainer