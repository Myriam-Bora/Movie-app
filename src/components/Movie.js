import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import PropTypes from "prop-types";
import "../style.css";
import { modalReducer } from "../store";

//props의 특정값을 가져올 때는 반듯 {} 로 감싸준다 !
function Movie({ id, year, title, summary, poster, genres }) {
  const [detailState, detailDispatch] = React.useReducer(modalReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = detailState;
  return (
    //to안에 props도 함께 보내기
    <div className="movie">
      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => detailDispatch({ type: "CLOSE_MODAL" })}
        content={(title, summary, genres)}
      >
        <Modal.Header>
          {title}&nbsp;
          <span>({year})</span>&nbsp;
          <div>
            {genres.map((genre, index) => (
              <span
                key={index}
                className="movie__genre"
                style={{ fontSize: "10px", opacity: "0.4" }}
              >
                {/* slice : 일정 글자수에서 자르기 */}
                {genre.slice(0, 20)}&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </Modal.Header>
        <Modal.Content>{summary}</Modal.Content>
        <Modal.Actions>
          <Button
            positive
            onClick={() => detailDispatch({ type: "CLOSE_MODAL" })}
          >
            Done
          </Button>
        </Modal.Actions>
      </Modal>
      <img
        className="movie__poster"
        src={poster}
        alt={title}
        title={title}
        onClick={() =>
          detailDispatch({
            type: "OPEN_MODAL",
            title: title,
            genres: genres,
            summary: summary,
          })
        }
      ></img>

      <div className="movie__data">
        <h4 className="movie__title">{title}</h4>
        <div className="movie__year">{year}</div>
      </div>
    </div>
  );
}

//propTypes : props의 타입을 검사. 타입에 맞지 않은 값이 전달되면 콘솔에 에러를 준다
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, //arrayOf:배열
};

export default Movie;
