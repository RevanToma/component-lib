import { Button } from "../button/Button";
import propTypes from "prop-types";
import { useState } from "react";
const Counter = ({ color }) => {
  const [counterVal, setCounterVal] = useState(0);

  const handleOnClick = (e) => {
    if (e === "ADD") {
      setCounterVal(counterVal + 1);
      return;
    }
    setCounterVal(counterVal - 1);
  };

  return (
    <>
      <span style={{ color }}>Counter: {counterVal}</span>
      <Button
        label="+"
        onClick={() => handleOnClick("ADD")}
        backgroundColor="#66B0C7"
      />
      <Button
        label="-"
        onClick={() => handleOnClick()}
        backgroundColor="#66B0C7"
      />
    </>
  );
};

Counter.propTypes = {
  color: propTypes.string,
};

export default Counter;
