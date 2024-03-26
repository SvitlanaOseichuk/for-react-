import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { requestMovieCast } from '../../Api';
import css from './MovieCast.module.css'


const MovieCast = () => {

  const { movieId } = useParams();
  const [MovieCast, setMovieCast] = useState(null);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const movie = await requestMovieCast(movieId);
        setMovieCast(movie);
      } catch (err) {
        console.error('Error fetching movie data:', err);
      }
    }

    fetchMovieCast();
  }, [movieId]);

  return (
    <div className={css.container}>
      {MovieCast !== null && (
        MovieCast.cast.slice(0, 15).map(cst => (
          <div key={cst.id}>
            <img
              width={100} 
              src={`https://image.tmdb.org/t/p/w500${cst.profile_path}`}
              alt={cst.name}
            />
            
            <h3 className={css.castName}>{cst.name}</h3>

            <p>Character: {cst.character}</p>
          </div>
          

        ))
      )}

    </div>
  )
}

export default MovieCast

