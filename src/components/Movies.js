import React, { useEffect, useState } from 'react'
import MovieDiv from './MovieDiv';

const Movies = ({ movies, title }) => {
    const [movie, setMovie] = useState(movies);
    const [favorites, setFavorites] = useState([])

    const toggleFavorite = (id) => {
        setMovie(prevMovie => {
            return prevMovie.map((m) => {
                return m.id === id ? { ...m, isSaved: !m.isSaved } : m
            })
        })
    }

    useEffect(() => {
        setFavorites(movie.filter((m) => m.isSaved === true))
    }, [movie])

    return (
        <>
            <>
                {favorites != 0 && (
                    <>
                        <h2 style={{ "color": "green", "textAlign": "center" }}>Favorites</h2>
                        <div className='movies-tv-shows'>
                            {
                                favorites.map((fav) => {
                                    return (
                                        <MovieDiv movies={fav} toggle={toggleFavorite} key={fav.id} background={"linear-gradient(green, black)"} border={"10px solid green"} />
                                    )
                                })
                            }
                        </div>
                    </>
                )}

            </>
            <h2 style={{ "textAlign": "center", "color": "#717afa" }}>{title}</h2>
            <div className='movies-tv-shows'>
                {
                    movie.map((m) => (
                        <MovieDiv movies={m} toggle={toggleFavorite} key={m.id} background={"linear-gradient(blue, black)"} border={"10px solid blue"} />
                    ))}
            </div>
        </>
    )
}

export default Movies


// < div className = 'movie-card' key = { m.id } >
//                         <img src={m.image} alt="Cover" className='movie-image' />
//                         <h3 className='movie-title'>{m.title}</h3>
//                         <p className='movie-genre'>{m.genre} | {m.length}</p>
//                         <h4 className='summary-header'>Summary</h4>
//                         <p className='movie-description'>{m.description}</p>
//                         <div>
//                             <button className='watch-trailer'><i className="bi bi-play-circle"></i> Watch Trailer</button>
//                             <div className='movie-card-icons'>
//                                 <i className={m.isSaved == true ? "bi bi-bookmark-check-fill" : "bi bi-bookmark"} onClick={() => toggleFavorite(m.id)}></i>
//                                 <i className="bi bi-share-fill"></i>
//                             </div>
//                         </div>
//                     </div >