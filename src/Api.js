import axios from "axios";

const options = {
 headers: {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzUwYzczOGY2Njg5MTc2ZDE2NzIwZWIwNmZjZDg1ZCIsInN1YiI6IjY2MDAzYmY5MWIxZjNjMDE3YzlhNzA3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vvLk-J4BZ77qi52zspPz3H_DLakl8nM5WMvcQvI_2Zk'
 }
};

export const requestTrendingMovies = async () => {
    const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';

    const {data} = await axios.get(url, options);
    return data;
}


export const requestMoviesByName = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`;

    const { data } = await axios.get(url, options);
    return data;
}


export const requestMoviesById = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

    const { data } = await axios.get(url, options);
    return data;
}



export const requestMovieCast = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;

    const { data } = await axios.get(url, options);
    return data;
}


export const requestMovieReviews = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;

    const { data } = await axios.get(url, options);
    return data;
}