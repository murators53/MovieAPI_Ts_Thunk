import { MovieType } from '../../Type'
import './MovieCard.scss'
import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

export interface IMovieCard {
  data:MovieType
  key:number
}

const MovieCard = (props:IMovieCard) => {
  const {data}= props
  return (
    <SplideSlide>
    <div className='card-item'>
      <Link to={`/movie/${data.imdbID}`}>
      <div className='card-inner'>
        <div className='card-top'>
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className='card-bottom'>
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
    </SplideSlide>
  )
}

export default MovieCard