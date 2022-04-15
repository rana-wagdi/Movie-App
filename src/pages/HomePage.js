import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

export default function HomePage() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/popular?api_key=4687d8cd18948e76118e0779782ef33e')
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err))
    }, [])
    return (
        <>
            <h1>Movies</h1>

            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {movies.map((movie) => {
                    console.log(movies)
                    return (
                        <div className='col-md-4 mb-3' key={movie.id}>

                            <MovieCard movie={movie} />

                        </div>
                    )
                })}
            </div>

        </>
    )
}
