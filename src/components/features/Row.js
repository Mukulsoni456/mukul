import React from 'react'
import Axios from '../../Axios'
import { useState, useEffect } from 'react'
import './row.css'

function Row({title, fetchurl, islarge = false}) {

    const base_url = "https://image.tmdb.org/t/p/original/"

    const [Movie, setMovie] = useState([])
    useEffect(() => {
       async function fetchData(){
           const request = await Axios.get(fetchurl)
           setMovie(request.data.results)
           return request
        }
        fetchData()
        console.log(Movie)
    }, [fetchurl])
    return (
        <div className='row_container'>
            <h1>{title}</h1>

            <div className='row_posters'>
            {
                Movie.map(movie =>{
                    return <img src={`${base_url}${movie.backdrop_path}`}></img>
                })
            }
            </div>
        
        </div>
    )
}

export default Row
