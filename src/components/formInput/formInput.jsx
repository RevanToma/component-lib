import propTypes from "prop-types";
import { useState } from "react";

import "./formInput.css";
const FormInput = ({ name, type, label, placeholder }) => {
  const [value, setValue] = useState("");
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="form">
        <label htmlFor={name}>{label}: </label>
      </div>
      <input
        className="input"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </>
  );
};

FormInput.propTypes = {
  /**
   * name attr for input
   */
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  type: propTypes.string,
  placeholder: propTypes.string,
};

export default FormInput;
