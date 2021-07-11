import React from "react";
import { connect } from "react-redux";
import input from '../Component/input';


const CounterComponent = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.increment();
        }}
      >
        INCREMENT
      </button>
      <div>
        <b>{props.counter}</b>
      </div>
      <button
        onClick={() => {
          props.decrement();
        }}
      >
        DECREMENT
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { counter: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => {
      dispatch({ 
        type: "INCREMENT",
        payload: {
          incrementBy: value,
        }
    
    });

    },
    decrement: () => {
      dispatch({ type: "DECREMENT" });
    },
  };
};

const returnedFunction = connect(mapStateToProps, mapDispatchToProps);

export default returnedFunction(CounterComponent);
