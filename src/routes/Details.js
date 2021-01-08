import React from "react";

//location으로 하면 location-state 처럼 더 빠르게 접근할 수 있다

class Details extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    //history : 페이지의 이동 기록을 알 수 있다
    //.push : 이동하고자 하는 path로 원하는 컴포넌트로 이동
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    console.log(location);
    if (location.state) {
      return (
        <div>
          <div className="movie-app__title">Movie Chart</div>
          <div className="details">
            <div className="header">Details</div>
            <div className="main">
              <div className="main-info">
                <div className="main-info__main">
                  <div className="poster">
                    <img
                      src={location.state.poster}
                      alt={location.state.title}
                    ></img>
                  </div>
                  <div className="info">
                    <div className="title"> {location.state.title}</div>
                    <div className="year"> {location.state.year}</div>
                    <ul className="genres">
                      {" "}
                      {location.state.genres.map((genre) => (
                        <li className="detail__genre">{genre}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="summary"> {location.state.summary}</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Details;
