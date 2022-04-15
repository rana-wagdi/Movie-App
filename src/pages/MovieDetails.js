import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetails() {
    const [movieDetails, setMovieDetails] = useState({});
    const params = useParams();
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=4687d8cd18948e76118e0779782ef33e`)
            .then((res) => setMovieDetails(res.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <div>MovieDetails</div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                            className="img-fluid rounded-start"
                            alt={movieDetails.title}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{movieDetails.title}</h2>
                            <p className="card-title">{movieDetails.overview}</p>
                            <p className="card-title">{movieDetails.budget}</p>
                            {/* <p className="card-text">{productDetails.description}</p> */}
                            <p className="card-text">
                                <small className="text-muted"> {movieDetails.tagline}</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
