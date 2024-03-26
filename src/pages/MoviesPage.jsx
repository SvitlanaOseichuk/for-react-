import { Field, Form, Formik } from 'formik';
import css from './Pages-css/MoviesPage.module.css'
import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import { requestMoviesByName } from '../Api';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {

  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query')


  useEffect(() => {
    async function fetchData() {
      try {
        if (searchQuery) {
          const data = await requestMoviesByName(searchQuery);
          if (data && data.results) { 
            setMovies(data.results);
          } else {
            console.error('No results found in data:', data);
          }
        }
              } catch (err) {
                  console.error('Error fetching data:', err);
              }
          }
    
          fetchData();
      }, [searchQuery]);

 

      const handleSubmit = (values, actions) => {
        if(values.length === 0){
          alert('please enter the search word');
          return;
        }
        setSearchParams({ query: values.query });
        actions.resetForm();
      };
    


  return (
    <div className={css.searchBar}>
      <Formik
        initialValues={{ query: searchQuery ?? '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            className={css.input}
            type="text"
            name="query"
            autoComplete='off'
            autoFocus
            placeholder='Search movie'

          />
          <button className={css.submitBtn} type="submit">Search</button>
        </Form>
      </Formik>

      <div>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default MoviesPage;
