import React, { FC } from "react";
import st from "./CoursesContainer.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const CoursesContainer: FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`${className} ${st.container}`} {...props}>
      {children}
    </div>
  );
};

export default CoursesContainer;
