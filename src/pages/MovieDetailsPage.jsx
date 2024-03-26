import css from './Pages-css/MovieDetailsPage.module.css'
import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { requestMoviesById } from '../Api';
import MovieCast from '../components/MovieCast/MovieCast';
import MovieReviews from '../components/MovieReviews/MovieReviews';



const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? '/')

  useEffect(() => {
    async function fetchData() {
      try {
        const movie = await requestMoviesById(movieId);
        setMovieData(movie);
      } catch (err) {
        console.error('Error fetching movie data:', err);
      }
    }

    fetchData();
  }, [movieId]);


  return (
    <main>
      
      <NavLink className={css.backBtn} to={backLinkHref.current} >Go back</NavLink>

      {movieData && (
        <div className={css.movieData}>
          <div className={css.moviedata}>
          <img
            width={230} 
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.title}
          />
            <div className={css.movieDesc}>
              <h2>{movieData.title}</h2>
              <p><span className={css.titles}>Genre: </span>{movieData.genres.map(genre => genre.name).join(', ')}</p>
              <p><span className={css.titles}>User score: </span> {movieData.vote_average}</p>
            </div>
          </div>
          <p><span className={css.titles}>Description:  </span>{movieData.overview}</p>
        </div>
      )}

      <div>
        <NavLink className={css.button} to='cast'>Cast</NavLink>
        <NavLink className={css.button} to='reviews'>Reviews</NavLink>
      </div>

      <div>
        <Routes>
          <Route path='cast' element={<MovieCast/>} />
          <Route path='reviews' element={<MovieReviews/>} />
        </Routes>
      </div>
      
    </main>
  );
};

export default MovieDetailsPage;

