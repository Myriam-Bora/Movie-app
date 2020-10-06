import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

//props의 특정값을 가져올 때는 반듯 {} 로 감싸준다 !
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img
        className="movie__poster"
        src={poster}
        alt={title}
        title={title}
      ></img>
      <div className="movie__data>">
        <h3 className="movie__title">{title}</h3>
        <h3 className="movie__year">{year}</h3>
        <p className="movie__summary">{summary}</p>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="movie__genre">
              {genre}
            </li> //index : map을 돌리면 자동으로 index가 만들어진다
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, //arrayOf:배열
};
export default Movie;
