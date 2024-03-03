import React from 'react'
import { Link } from 'react-router-dom'

const MovieDiv = ({movies, toggle, background, border}) => {
    return (
        <div className='movie-card' style={{"background" : background, "border": border}}>
            <img src={movies.image} alt="Cover" className='movie-image' />
            <h3 className='movie-title'>{movies.title}</h3>
            <p className='movie-genre'>{movies.genre} | {movies.length}</p>
            <h4 className='summary-header'>Summary</h4>
            <p className='movie-description'>{movies.description}</p>
            <div>
                <Link to="*" className='watch-trailer'><i className="bi bi-play-circle"></i> Watch Trailer</Link>
                <div className='movie-card-icons'>
                    <i className={movies.isSaved == true ? "bi bi-bookmark-check-fill" : "bi bi-bookmark"} onClick={() => toggle(movies.id)}></i>
                    <i className="bi bi-share-fill"></i>
                </div>
            </div>
        </div >
    )
}

export default MovieDiv
