import React from 'react'
import Movies from './Movies'
import MoviesData from './MoviesData'

const AllMovies = () => {
    const movie = MoviesData;

    return (
        <div className='container'>
            <div>
                {movie && <Movies movies={movie} title={"All Movies / TV Shows"} />}
            </div>
        </div>
    )
}

export default AllMovies
