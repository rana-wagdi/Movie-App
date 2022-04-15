import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import {setFavourite} from '.././store/actions/favourite' 
import {setReducer} from '../store/actions/reduce'
export default function MovieCard({movie}) {

  const dispatch = useDispatch();
  const addFavMovie=()=>{
    dispatch(setFavourite(movie))
}
const removeFavourite=((movie)=>{
  dispatch(setReducer(movie))
  })
  return (
    <div className="card h-100" >
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} /> 
 <div className="card-body">
   <p className="card-title">{movie.title}</p> 
   <p className="card-title">{movie.overview}</p> 
    {/* <p className="card-text">{product.price}</p> */}
   <Link to={`/movies/${movie.id}`} className="btn btn-primary">Details</Link>
   <button onClick={addFavMovie} >Favourites</button>
   <button  onClick={(()=>{removeFavourite(movie)})}>remove</button>
 </div> 
</div>
  )
}
