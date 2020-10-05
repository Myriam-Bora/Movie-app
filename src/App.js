import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    console.log("componentDidMount !");
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    /*this.isLoading을 계속 할 필요없이 미리 선언해서 사용한다 */
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "Ready"}</div>;
  } /*render end */
} /*App end */

export default App;
