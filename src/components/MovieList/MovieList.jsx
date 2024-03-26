import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css'


const MovieList = ({ movies }) => {

  const location = useLocation();

  return (
    <div>
      {location.pathname === '/' && <h2 className={css.title}>Trending Movies</h2>}
       <div className={css.container}>
        {movies !== null && movies.map((movie) => (
          <div className={css.column} key={movie.id}>
           {movie.title && (
              <Link 
                className={css.movieTitle}
                state={location}
                to={`/movies/${movie.id}`}>
                <img 
                  className={css.pictures}
                  width={100} 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} />
                {movie.title}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>

  );
};

export default MovieList;
