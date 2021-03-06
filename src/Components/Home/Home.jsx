// @flow

import React from "react";
import { connect } from "react-redux";
import { history } from "../../Config/Store";

import { DECREMENT, INCREMENT } from "./HomeActionReducer";
import Button from "antd/es/button/button";

const Home = props => (
  <div>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">react-boilerplate</h1>
      </header>

      <h2>
        <b>Count:</b> {props.count}
      </h2>

      <p>
        <Button type="primary" onClick={props.increment}>
          Increment
        </Button>
      </p>

      <p>
        <Button type="primary" onClick={props.decrement}>
          Decrement
        </Button>
      </p>

      <p>
        <Button type="primary" onClick={() => props.changePage()}>
          About page
        </Button>
      </p>
    </div>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch({
        type: INCREMENT
      });
    },
    decrement: () => {
      dispatch({
        type: DECREMENT
      });
    },
    changePage: () => history.replace("/about-us")
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
