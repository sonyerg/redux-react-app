import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { useState } from "react";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const [userInput, setUserInput] = useState("");

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement);
  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: parseInt(userInput) || 0 });
    dispatch(counterActions.increase(parseInt(userInput)));
    // returns: {type: SOME_UNIQUE_IDENTIFIER, payload: userInput}
    setUserInput("");
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <input
        type="number"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />
      <button onClick={increaseHandler}>Increase by Input</button>
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
