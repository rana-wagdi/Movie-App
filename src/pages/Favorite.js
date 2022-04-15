import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setReducer} from '../store/actions/reduce'


export default function Favorite() {

    const fav = (useSelector((state) => state.favourite.currentMovie))
    const dispatch = useDispatch();
    const removeFavourite=((mov)=>{
        dispatch(setReducer(mov))
        })
    
    return (
        <>
            <div>
                {fav.map((mov, index) => {
                    const baseURL = `https://image.tmdb.org/t/p/w500/${mov.poster_path}`
                    return (
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
                                        className="img-fluid rounded-start"
                                        alt={mov.title}
                                    />
                                </div>
                                <button  onClick={(()=>{removeFavourite(mov)})}>remove</button>

                            </div>
                        </div>
                    )
                })}

            </div >
        </>
    )
}
