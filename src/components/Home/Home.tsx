import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux'
import { addMovies, fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice'

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry"
  const seriesText = "Friends"

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));    
    dispatch(fetchAsyncShows(seriesText));    
  }, [dispatch])

  return (
    <div>
      <div className='banner-img'>
        <MovieListing />
      </div>
    </div>
  )
}

export default Home