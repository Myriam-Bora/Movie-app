import React, { useEffect } from "react";
import Movie from "../components/Movie";
import { moviesReducer } from "../store";
import "../style.css";
import axios from "axios";

function Home() {
  const [state, dispatch] = React.useReducer(moviesReducer, {
    isLoading: true,
    movies: [],
  });

  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    dispatch({ type: "LOAD_MOVIES", movies });
  };

  useEffect(() => {
    getMovies();
  }, []);

  const { isLoading, movies } = state;
  let makeArray = Array.from(movies);

  return (
    <div>
      {isLoading ? (
        <div className="loding__text">
          <h1>Loading...</h1>
        </div> //className : HTML이 아닌 JSX에서 사용하는 class
      ) : (
        <div className="movies">
          <div className="movie-app__title">Movie Chart</div>
          <div className="movie__list">
            {makeArray.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
} /*App end */

export default Home;
