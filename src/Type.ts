export type MovieType ={
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}
export interface MovieStateType1 {
    Response:string
    Search:MovieType[]
    totalResults:string
}

export type MovieDetailType = {
    Actors: string;
    Awards: string;
    BoxOffice: string;
    Country: string;
    DVD: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string;
    Poster: string;
    Production: string;
    Rated: string;
    Ratings: MovieDetailRatings[];
    Released: string;
    Response: string;
    Runtime: string;
    Title: string;
    Type: string;
    Website: string;
    Writer: string;
    Year: string;
    imdbID: string;
    imdbRating: string;
    imdbVotes: string;
}

interface MovieDetailRatings {
    Source: string
    Value: string
}

export const options={
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
  }