import React from 'react'
import './banner.css'
import Axios from '../../Axios'
import { useState } from 'react'
import { useEffect } from 'react'
import requests from '../../requests'

const API_KEY = 'c0cec75d56b038231955969de48a4fbb';

function Banner() {
    const [movie, setmovie] = useState([])
    console.log(requests.fetchNetflixOriginals)


    useEffect(() => {
        async function fetchData() {
            
            const request = await Axios.get(requests.fetchActionMovies);
            setmovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1 )
                ]
            )
            return request
        }
        fetchData()

    }, [])
    console.log(movie)

    return (
        <div>
            <div className='banner-section' style={{
                backgroundImage:` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}') `
            }
            }>
                <div className='banner_header'>
                    <h1>Stranger Things</h1>
                    <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and a strange little girl</p>
                    <div className='banner_buttons'>
                        <button>Play</button>
                        <button>More Info</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
