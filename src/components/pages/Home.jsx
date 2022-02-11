import React from 'react'
import Banner from '../features/Banner'
import requests from '../../requests'
import Row from '../features/Row'
import './home.css'
 function home() {
    return (
        <>
                <Banner></Banner>

            <section className='rows'>
                <Row title='Netflix Originals' fetchurl ={requests.fetchNetflixOriginals} islarge ></Row>
                <Row title='Trending' fetchurl ={requests.fetchTrending}></Row>
                <Row title='Action Movies' fetchurl ={requests.fetchActionMovies}></Row>
                <Row title='Romantic Movies' fetchurl ={requests.fetchRomanceMovies}></Row>
                <Row title='Comedy Movies' fetchurl ={requests.fetchComedyMovies}></Row>
                <Row title='Horror Movies' fetchurl ={requests.fetchHorrorMovies}></Row>
            </section>
        </>
        
    )
}

export default home
