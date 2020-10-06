import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //await : axios는 속도가 느리기 때문에 완료가 될 때까지 기다려주는 keyword
    //단, await을 사용하기 위해 async 펑션이 필요
  };

  componentDidMount() {
    this.getMovies(); //getMovies 메소드 호출
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "Ready"}</div>;
  } /*render end */
} /*App end */

export default App;
