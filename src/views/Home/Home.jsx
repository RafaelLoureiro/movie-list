import { useEffect, useState } from "react";
import { MoviesServices } from "../../api/MovieService";
import MovieCard from "../../components/MovieCard/MovieCard";

const Home = ({ searchValueProp }) => {
    const [movies, setMovies] = useState([]);

    async function getMovies() {//pegar os dados do filme
        const { data: { results },//desetruturando duplamnete obeto{data: {results}}
        } = await MoviesServices.getMovies();

        setMovies(results);
    }

    async function getMoviesSearch(movieString) {
        const {
            data: { results },
        } = await MoviesServices.searchMovies(movieString);

        setMovies(results);
    }

    useEffect(() => {

        getMovies();

    }, []);


    useEffect(() => {
        if (searchValueProp) {
            getMoviesSearch(searchValueProp);
        } if (searchValueProp === "") {
            getMovies();
        }
    }, [searchValueProp]);

    //movieProp -passa a proprieda para o elemento filho MovieCard
    return <section className="Home">
        {movies.map((movie) => (
            <div key={movie.id}>
                <MovieCard movieProp={movie} />
            </div>
        ))}
    </section>


};
export default Home; 