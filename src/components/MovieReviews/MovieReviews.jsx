import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { requestMovieReviews } from '../../Api';
import css from './MovieReviews.module.css'


const MovieReviews = () => {

  const { movieId } = useParams();
  const [Reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const movie = await requestMovieReviews(movieId);
        setReviews(movie);
      } catch (err) {
        console.error('Error fetching movie data:', err);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
       <h2>Reviews</h2>
       {Reviews !== null ? (
         Reviews.results.map(result => (
           <div key={result.id} className={css.review}>
             <h4 className={css.reviewUres}>user: {result.author}</h4> 
             <p>{result.content}</p>
           </div>
         ))
       ) : (
        <p>there is no reviews now</p>
       )}
    
     </div>
  )
}

export default MovieReviews