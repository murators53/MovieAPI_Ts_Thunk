import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShows, removeSelectedMovieOrShows } from '../../features/movies/MovieSlice'
import { MovieDetailType } from '../../Type'
import './MovieDetail.scss'

const MovieDetail = () => {
  const { imbdID } = useParams()
  const dispatch = useDispatch()
  const data: any = useSelector(getSelectedMovieOrShows)

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imbdID));
    return () => {
      dispatch(removeSelectedMovieOrShows());
    }
  }, [dispatch, imbdID])

  return (
    <div className='movie-section'>
      {Object.keys(data).length === 0 ? (
        <div>Loading....</div>
      ) : (
        <>
          <div className='section-left'>
            <div className='movie-title'>{data.Title}</div>
            <div className='movie-rating'>
              <span>
                IMBD Rating <i className='fa fa-star'></i> : {data.imbdRating}
              </span>
              <span>
                IMBD Votes <i className='fa fa-thumbs-up '></i> : {data.imbdVotes}
              </span>
              <span>
                Runtime <i className='fa fa-film'></i> : {data.Runtime}
              </span>
              <span>
                Year <i className='fa fa-calendar'></i> : {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>

  )
}

export default MovieDetail