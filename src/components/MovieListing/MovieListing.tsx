import React from 'react'
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getAllMovies, getAllShows } from '../../features/movies/MovieSlice';
import { RootState } from '../../features/store';
import { MovieStateType1, MovieType } from '../../Type';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

const MovieListing = () => {

  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
  console.log('SHOWSS', shows);
  console.log('movies', movies);
  let renderMovies, renderShows: any = null;

  renderMovies = movies.Response === "True" ? (
    movies.movies.map((movie: MovieType, index: number) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <h3>Movies Error</h3>
  )

  renderShows = shows.Response === "True" ? (
    shows.shows.map((movie: MovieType, index: number) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <h3>Movies Error</h3>
  )


  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          <Splide options={{
            type: 'loop',
            rewind: true,
            speed: 0,
            rewindSpeed: 0.1,
            perPage: 6,//sayfada goruntulenecek slayt sayisi,
            drag: 'free',
            arrows: true,//oklari=arrows
            breakpoints: {
              640: {
                type: 'loop',
                rewind: true,
                speed: 0,
                rewindSpeed: 0.1,
                perPage: 2,//sayfada goruntulenecek slayt sayisi,
                drag: 'free',
                arrows: true,//oklari=arrows
              },
              1024: {
                type: 'loop',
                rewind: true,
                speed: 0,
                rewindSpeed: 0.1,
                perPage: 3,//sayfada goruntulenecek slayt sayisi,
                drag: 'free',
                arrows: true,//oklari=arrows
              },
              1300: {
                type: 'loop',
                rewind: true,
                speed: 0,
                rewindSpeed: 0.1,
                perPage: 4,//sayfada goruntulenecek slayt sayisi,
                drag: 'free',
                arrows: true,//oklari=arrows
              },
              1500: {
                type: 'loop',
                rewind: true,
                speed: 0,
                rewindSpeed: 0.1,
                perPage: 5,//sayfada goruntulenecek slayt sayisi,
                drag: 'free',
                arrows: true,//oklari=arrows
              }
            }
          }}>
            {renderMovies}
          </Splide>
        </div>
      </div>
      <div className='show-list'>
        <h2>Shows</h2>
        <div className='movie-container'>
        <Splide options={{
            type: 'loop',
            rewind: true,
            speed: 0,
            rewindSpeed: 0.1,
            perPage: 6,//sayfada goruntulenecek slayt sayisi,
            drag: 'free',
            arrows: true,//oklari=arrows
            breakpoints: {
              640: {
                type: 'loop',
                rewind: true,
                speed: 0,
                rewindSpeed: 0.1,
                perPage: 2,//sayfada goruntulenecek slayt sayisi,
                drag: 'free',
                arrows: true,//oklari=arrows
              },
              1024: {
                type: 'loop',
                rewind: true,
                speed: 0,
                rewindSpeed: 0.1,
                perPage: 3,//sayfada goruntulenecek slayt sayisi,
                drag: 'free',
                arrows: true,//oklari=arrows
              },
              1300: {
                type: 'loop',
                rewind: true,
                speed: 0,
                rewindSpeed: 0.1,
                perPage: 4,//sayfada goruntulenecek slayt sayisi,
                drag: 'free',
                arrows: true,//oklari=arrows
              },
              1500: {
                type: 'loop',
                rewind: true,
                speed: 0,
                rewindSpeed: 0.1,
                perPage: 5,//sayfada goruntulenecek slayt sayisi,
                drag: 'free',
                arrows: true,//oklari=arrows
              }
            }
          }}>
          {renderShows}
          </Splide>
          </div>
      </div>
    </div>
  )
}

export default MovieListing