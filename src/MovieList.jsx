import MovieCard from './cine/MovieCard';
import { getAllMovies } from './data/MoviesData';

export default function MovieList() {

    const MoviesData = getAllMovies();
    console.log(MoviesData);

    return (
        <>
            <div className="content">
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">

                    {
                        MoviesData.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    }

                </div>
            </div>
        </>
    )
}