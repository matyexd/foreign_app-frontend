import React, { FC } from "react";
import st from "./Textarea.module.scss";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
const Textarea: FC<Props> = ({ className = "", value, ...props }) => {
  return (
    <div
      className={`${className} ${value != "" ? st.textarea_withValue : ""} ${
        st.textarea__wrapper
      }`}
    >
      <textarea className={`${st.textarea} `} value={value} {...props} />
    </div>
  );
};

export default Textarea;
