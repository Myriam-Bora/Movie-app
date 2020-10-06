import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./style.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    //{data:{data:{movies}}}
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({ movies, isLoading: false });
    //movies.data.data.movies : 너무 길어서 위처럼 작성 (es6)
    //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // this.setState(movies.data.data.movies, { isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <div>
        {isLoading ? (
          <div className="loding__text">
            <h1>Loading...</h1>
          </div> //className : HTML이 아닌 JSX에서 사용하는 class
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              console.log(movie);
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
        )}
      </div>
    );
  } /*render end */
} /*App end */

export default App;
