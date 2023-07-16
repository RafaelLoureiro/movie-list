import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '06cfbb0c2930087a2c61c2c13a5bc7af';

const withBaseUrl = (path) => `${BASE_URL}${path}?
api_key=${API_KEY}`;

export class MoviesServices {
    //metodos de retorno end-points

    static getMovies() {//static possibilita o tranpote *
        return axios(withBaseUrl("movie/popular"));
    }

    static getMoviesDtails(id) {
        return axios(withBaseUrl(`movie/${id}`));
    }

    static searchMovies(movie) {
        return axios(withBaseUrl("search/movie") + `&query=${movie}`);
    }
}

