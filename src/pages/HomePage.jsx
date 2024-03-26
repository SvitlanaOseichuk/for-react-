import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import { requestTrendingMovies } from '../Api';



const HomePage = () => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await requestTrendingMovies();
                if (data && data.results) { 
                    setMovies(data.results);
                } else {
                    console.error('No results found in data:', data);
                }
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <MovieList movies={movies}/>
        </div>
    );
};

export default HomePage;

