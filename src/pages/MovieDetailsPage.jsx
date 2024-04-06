import css from './Pages-css/MovieDetailsPage.module.css'
import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { requestMoviesById } from '../Api';
import MovieCast from '../components/MovieCast/MovieCast';
import MovieReviews from '../components/MovieReviews/MovieReviews';
import { useDispatch, useSelector } from 'react-redux';
import { setLoader, setmovieData } from '../redux/movieDetailsReducer';
import Loader from '../components/Loader';



const MovieDetailsPage = () => {
  const movieData = useSelector((state) => state.movieDetails.movieData)
  const loader = useSelector((state) => state.movieDetails.loader)
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? '/')

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(setLoader(true))
        const movie = await requestMoviesById(movieId);
        dispatch(setmovieData(movie));
      } catch (err) {
        console.error('Error fetching movie data:', err);
      } finally{
        dispatch(setLoader(false))
      }
    }

    fetchData();
  }, [movieId]);


  return (
    <main>
      
      {loader && <Loader />}
      
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

