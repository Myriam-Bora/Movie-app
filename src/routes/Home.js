import React from "react";
import Movie from "../components/Movie";
import { connect } from "react-redux";
import { moviesReducer } from "../store";
import "../style.css";

function Home({ movieList }) {
  const [state, dispatch] = React.userReducer(moviesReducer, {
    isLoading: true,
    movies: [],
  });

  const { isLoading, movies } = state;

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
            {movies.map((movie) => {
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

function mapStateToProps(state) {
  return { movieList: state };
}

export default connect(mapStateToProps)(Home);
