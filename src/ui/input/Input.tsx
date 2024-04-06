import React, { FC } from "react";
import st from "./Input.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input: FC<Props> = ({ className = "", value, ...props }) => {
  return (
    <div
      className={`${className}  ${value != "" ? st.input_withValue : ""} ${
        st.input__wrapper
      }`}
    >
      <input className={`${st.input} `} value={value} {...props} />
    </div>
  );
};

export default Input;
