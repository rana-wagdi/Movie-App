import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import {setFavourite} from '.././store/actions/favourite' 
import {setReducer} from '../store/actions/reduce'

import '../styles/movieCard.css'
export default function MovieCard({movie}) {

  const dispatch = useDispatch();
  const addFavMovie=()=>{
    dispatch(setFavourite(movie))
}
const removeFavourite=((movie)=>{
  dispatch(setReducer(movie))
  })
  return (
    <div className="movieCard" >
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="" alt={movie.title} /> 
 <div className="card-body">
   <p className="card-title">{movie.title}</p> 
   <p className="">Rate: {movie.vote_average}</p> 
   {/* <p className="">{movie.overview}</p>  */}
    {/* <p className="card-text">{product.price}</p> */}
   <Link to={`/movies/${movie.id}`} className="btn btn-primary">Details</Link>
   <button onClick={addFavMovie} >Favourites</button>
   <button  onClick={(()=>{removeFavourite(movie)})}>remove</button>
 </div> 
</div>
  )
}
