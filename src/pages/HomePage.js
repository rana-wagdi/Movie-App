import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import '../styles/homePage.css'

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

            <div className='movies'>
                {movies.map((movie) => {
                    console.log(movies)
                    return (
                        <div className='movie-item' key={movie.id}>

                            <MovieCard movie={movie} />

                        </div>
                    )
                })}
            </div>

        </>
    )
}
